# 🤖 AI Integration & Advanced Features
## Zero Hunger Platform · Bootcamp Training Manual (Deep Dive Edition)

> **Mode:** Live Coding + Hands-On Practice
> **Project Context:** *Zero Hunger* — connecting food donors, NGOs, volunteers & beneficiaries.
> **Prerequisite:** The Node.js + Express + MongoDB module (you'll add AI features onto that backend) and React (for the chat UI).
> **How to read this:** Each concept is built up gently — a **real-life analogy**, the **theory**, the **syntax**, and **working example code**. We go from "what even is an AI API" all the way to a production-ready, optimized, fully-integrated AI layer inside a MERN app.

> 🔐 **The one rule for this entire module:** an AI API key is a **secret that costs money**. It lives in `.env` on your **server** and is used **only from the backend** — never in React, never in the browser, never committed to Git. Every example follows this rule.

---

## 🎯 Learning Objectives

By the end of this module you will be able to:

- Explain what an AI API is and how large language models are called
- Write effective prompts (prompt engineering) and get **structured** output
- Build a full **AI chatbot** (React frontend + Express backend) with memory & streaming
- Handle **file uploads** and process them with AI (food image classification, document reading)
- Build **recommendation** and **summarization** features
- Add robust **error handling**, retries, rate-limit handling, and graceful fallbacks
- **Optimize** for cost, speed, and reliability (caching, model choice, token control)
- **Integrate** all of it cleanly into a full MERN app with professional structure

---

## 🗺️ Module Map

| # | Module | Core Idea |
|---|--------|-----------|
| 0 | Setup & Safety | Keys, `.env`, backend-only |
| 1 | What is an AI API? | Calling a language model |
| 2 | Prompt Engineering | Getting good output |
| 3 | Structured Output (JSON) | Machine-readable answers |
| 4 | The Backend AI Service | One clean wrapper |
| 5 | Building the Chatbot — Backend | Conversation + memory |
| 6 | Building the Chatbot — Frontend | React chat UI |
| 7 | Streaming Responses | Token-by-token replies |
| 8 | File Upload & Processing | Images & documents |
| 9 | Vision: Food Classification | AI "sees" the food |
| 10 | Recommendation Feature | Match donations → NGOs |
| 11 | Summarization Feature | Digests for the dashboard |
| 12 | Error Handling & Reliability | Retries, timeouts, fallbacks |
| 13 | Optimization | Cost, speed, caching |
| 14 | Full MERN Integration & Structure | Putting it all together |
| 🏆 | **Mini-Project** | **Zero Hunger AI Assistant** |

---

## 🧰 Module 0: Setup & Safety

**Real-life analogy:** An AI API key is like a **company credit card**. It's powerful and it spends real money on every use. You keep it in a locked drawer (`.env`), you let only trusted staff (your server) use it, and you never tape it to the office window (client-side code or GitHub).

### Get a key
Create an account with an AI provider (e.g., OpenAI), generate an **API key**, and add billing. *(This module uses the OpenAI SDK for concrete examples; the same ideas apply to any provider — Anthropic, Google, etc. Model names change over time, so always check the provider's current docs for the latest model string.)*

### Install (in your existing backend)
```bash
npm install openai          # the AI provider SDK
npm install multer          # for file uploads (later modules)
```

### Store the key safely
**`.env`** (never committed — it's in your `.gitignore`):
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxx
MONGO_URI=...
JWT_SECRET=...
```

**Why backend-only?** If you put the key in React, anyone can open DevTools, copy it, and run up thousands of dollars on your card. So the flow is always:

```
React → YOUR backend (holds the key) → AI provider → back to React
```
Your server is the trusted middleman. React never sees the key.

## 💬 Interview Questions
- Why must the AI API key stay on the backend?
- What goes in `.env` and why is it gitignored?
- Draw the request flow from React to the AI provider.

---

# 📦 Module 1: What is an AI API?

## The big idea

**Real-life analogy:** Imagine hiring a brilliant, fast intern who has read most of the internet. You can't talk to them in person, so you **send them a note** (your prompt) and they **send a note back** (the response). An **AI API** is the mail slot to that intern. You don't host the giant "brain" — you rent access to it over the internet, one note at a time.

**Theory:** A **Large Language Model (LLM)** is a program trained to predict the most likely next piece of text given everything before it. You send it text (a **prompt**); it returns generated text (a **completion**). The API is just an HTTP endpoint you call — exactly like the REST APIs you built in the Node module, except this one is hosted by the AI provider.

## Tokens — how AI reads and bills

**Real-life analogy:** The intern charges by the **word-ish piece**, not the sentence. A **token** is a chunk of text — roughly ¾ of a word. "Zero Hunger Platform" is about 3 tokens.

**Theory:** Both your input *and* the AI's output are measured in tokens, and you pay per token. Every model also has a **context window** — the maximum tokens it can consider at once (input + output). This is why long chat histories must eventually be trimmed.

```
"Donate 100 plates of rice"  →  ~6 tokens
Input tokens (your prompt) + Output tokens (the reply) = what you pay for
```

## The shape of a request: messages & roles

**Real-life analogy:** A group chat transcript. Each message has a sender. The AI reads the whole transcript and writes the next message.

**Theory:** You send an array of **messages**, each with a **role**:

| Role | Meaning |
|------|---------|
| `system` | the AI's instructions / persona ("You are the Zero Hunger assistant…") |
| `user` | what the human said |
| `assistant` | what the AI said previously (used to give it memory) |

## Your first AI call (backend)

```javascript
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",                  // a model name — check provider docs for current options
  messages: [
    { role: "system", content: "You are a helpful assistant for the Zero Hunger food donation platform." },
    { role: "user",   content: "What is Zero Hunger?" }
  ]
});

console.log(completion.choices[0].message.content);
```
```
▶ Zero Hunger is a platform that connects food donors — like restaurants and
  event halls — with NGOs and volunteers, so surplus food reaches people in
  need instead of being wasted.
```

**Theory — reading the response:** the reply lives at `completion.choices[0].message.content`. That nesting exists because the API *can* return multiple choices; you almost always want the first.

## Key parameters you control

| Parameter | Real-life analogy | Effect |
|-----------|-------------------|--------|
| `model` | which intern (junior/senior) | capability vs cost/speed |
| `temperature` | how *creative* vs *predictable* | `0` = focused/repeatable, `1`+ = creative |
| `max_tokens` | a word limit on the reply | caps output length & cost |
| `messages` | the conversation so far | the context the AI sees |

```javascript
const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  temperature: 0.2,            // factual, consistent — good for matching/classification
  max_tokens: 200,             // don't let it ramble
  messages: [ /* ... */ ]
});
```

## 🧠 Whiteboard — one AI call

```
   YOUR BACKEND                         AI PROVIDER
   ┌────────────────────┐   HTTPS      ┌──────────────────┐
   │ messages: [         │ ───────────►│  the LLM "brain"  │
   │   system: persona   │              │  predicts the     │
   │   user: question    │              │  next text        │
   │ ]                   │ ◄───────────│                   │
   └────────────────────┘  completion  └──────────────────┘
        choices[0].message.content  ← the reply text
        you pay for input tokens + output tokens
```

## 🏋️ Practice
1. Make your first AI call from a Node script and log the reply.
2. Change the `system` message to give the AI a Zero Hunger persona.
3. Ask the same question at `temperature: 0` and `temperature: 1` — compare.
4. Set `max_tokens: 30` and watch the reply get cut short.
5. Estimate the tokens in a sentence (≈ words ÷ 0.75).

## 💬 Interview Questions
- What is an LLM, and what does an AI API actually do?
- What is a token? What is a context window?
- What are the `system`, `user`, and `assistant` roles for?
- What does `temperature` control?
- Where in the response object is the reply text?

---
MDEOF
echo "Module 0-1 done. Lines:"; wc -l /home/claude/ai-manual.md
# 📦 Module 2: Prompt Engineering

## What is a prompt?

**Real-life analogy:** Briefing a new freelancer. "Make me a logo" gets you something random. "Make me a minimalist logo for a food-donation NGO, green tones, a leaf motif, on a white background" gets you what you wanted. **Prompt engineering** is writing instructions so clearly that the AI gives you exactly what you need.

**Theory:** The AI has no idea what you *meant* — only what you *wrote*. Better instructions → better, more reliable output. Three levers do most of the work: **role**, **context**, and **format**.

## Lever 1 — Set a role (the system message)

```javascript
{ role: "system", content:
  "You are the Zero Hunger assistant. You help donors, NGOs, and volunteers " +
  "with food donation, pickup scheduling, and platform questions. " +
  "Be friendly, concise, and only answer about the platform." }
```
This shapes tone, scope, and behavior for the whole conversation.

## Lever 2 — Give context

**Real-life analogy:** You can't ask an accountant about *your* taxes without showing them *your* numbers. The AI only knows what you include in the prompt.

```javascript
const donation = { food: "Rice", qty: 100, city: "Pune", expiresIn: "4 hours" };

const prompt = `A donor submitted this donation:
${JSON.stringify(donation)}
Write a short, friendly confirmation message for the donor.`;
```

## Lever 3 — Specify the format

**Real-life analogy:** "Tell me about the donations" vs "Give me a 3-bullet summary, max 10 words each." Be explicit about length, style, and shape.

```javascript
{ role: "user", content:
  "Summarize today's donation activity in exactly 3 short bullet points." }
```

## Few-shot prompting — teach by example

**Real-life analogy:** Showing a new employee two finished reports so they copy the style.

```javascript
const prompt = `Classify the food donation as "Veg" or "Non-Veg".

Examples:
Food: Paneer Curry → Veg
Food: Chicken Biryani → Non-Veg

Food: Dal and Rice →`;
// the AI completes: "Veg"
```
Giving examples dramatically improves consistency for repetitive tasks.

## A reusable prompt pattern

```
[ROLE]     Who the AI is and how to behave
[CONTEXT]  The specific data it needs
[TASK]     Exactly what to do
[FORMAT]   How the answer should look (length, structure, JSON…)
```

## 🧠 Whiteboard — vague vs engineered

```
   VAGUE PROMPT                        ENGINEERED PROMPT
   "tell me about this donation"       role:  "You are the ZH assistant"
        │                              context: the donation JSON
        ▼                              task:  "write a confirmation"
   random, inconsistent,               format:"1 sentence, friendly"
   maybe off-topic                          │
                                            ▼
                                      precise, consistent, on-brand
```

## 🏋️ Practice
1. Write a `system` prompt giving the AI a strict Zero Hunger persona.
2. Inject a donation object as context and ask for a confirmation message.
3. Ask for output "in exactly 3 bullet points" and verify it obeys.
4. Build a few-shot Veg/Non-Veg classifier prompt.
5. Rewrite a vague prompt using the ROLE/CONTEXT/TASK/FORMAT pattern.

## 💬 Interview Questions
- What is prompt engineering?
- How does the `system` message differ from the `user` message?
- Why must you include context in the prompt?
- What is few-shot prompting and when does it help?
- Name three ways to make a prompt more reliable.

---

# 📦 Module 3: Structured Output (JSON)

## Why structure matters

**Real-life analogy:** If you ask a warehouse worker "what's in stock?" and they reply with a friendly paragraph, your *software* can't use it. You need a checklist with boxes — something a machine can read. When AI output feeds back into your app (to save in MongoDB, to render in React), you need **JSON**, not prose.

**Theory:** You instruct the model to reply with **only JSON** in a shape you define, then `JSON.parse()` it in your code. This turns the AI from a chatbot into a **data-producing function**.

## Asking for JSON

```javascript
const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  temperature: 0,                         // deterministic for data tasks
  response_format: { type: "json_object" },   // ask the API to guarantee valid JSON
  messages: [
    { role: "system", content: "You are a food classifier. Reply with JSON only." },
    { role: "user", content:
      `Classify this food and reply as JSON with keys "type" (Veg/Non-Veg),
       "category" (e.g. grain, dairy, meat), and "estimatedServings" (number).
       Food: "100 plates of vegetable biryani"` }
  ]
});

const data = JSON.parse(completion.choices[0].message.content);
console.log(data);
```
```
▶ { type: "Veg", category: "grain", estimatedServings: 100 }
```
Now `data.type` and `data.estimatedServings` are real values you can store and use.

## Parse defensively

**Real-life analogy:** Even a good worker occasionally hands you a smudged form. Always wrap parsing so one bad reply can't crash your server.

```javascript
function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    // sometimes models wrap JSON in ```json fences — strip and retry
    const cleaned = text.replace(/```json|```/g, "").trim();
    try { return JSON.parse(cleaned); }
    catch { return null; }   // give up gracefully
  }
}
```

## 🧠 Whiteboard — AI as a function

```
   INPUT (text)                AI                 OUTPUT (JSON)
   "veg biryani, 100 plates" ──────► { type:"Veg",
                                       category:"grain",
   temperature: 0                     estimatedServings:100 }
   response_format: json_object            │
                                           ▼
                              JSON.parse → real JS object → save to MongoDB
```

## 🏋️ Practice
1. Ask the AI to classify a food and return JSON with 3 keys.
2. `JSON.parse` the result and log one field.
3. Use `temperature: 0` and `response_format: json_object`.
4. Write a `safeParse` helper that strips code fences.
5. Make the AI return an array of JSON objects for several foods.

## 💬 Interview Questions
- Why request JSON instead of prose from an AI?
- How do you guarantee parseable JSON?
- Why parse defensively?
- Why use `temperature: 0` for data tasks?
- How does structured output turn the AI into a "function"?

---

# 📦 Module 4: The Backend AI Service (one clean wrapper)

**Real-life analogy:** Instead of every department calling the AI vendor directly with their own messy paperwork, you set up **one in-house AI desk** that everyone routes through. If you switch vendors later, you change one desk — not the whole company.

**Theory:** Centralize *all* AI calls behind a single module (`aiService.js`). Benefits: the API key is touched in one place, you can swap models/providers easily, and every feature shares the same error handling and logging.

**`services/aiService.js`:**
```javascript
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const MODEL = "gpt-4o-mini";

// generic chat: pass messages, get text back
export const chat = async (messages, options = {}) => {
  const completion = await openai.chat.completions.create({
    model: options.model || MODEL,
    temperature: options.temperature ?? 0.5,
    max_tokens: options.maxTokens || 500,
    messages
  });
  return completion.choices[0].message.content;
};

// JSON helper: pass a prompt, get a parsed object back
export const chatJSON = async (systemPrompt, userPrompt) => {
  const completion = await openai.chat.completions.create({
    model: MODEL,
    temperature: 0,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt }
    ]
  });
  try { return JSON.parse(completion.choices[0].message.content); }
  catch { return null; }
};
```

Now any feature is a one-liner:
```javascript
import { chat, chatJSON } from "../services/aiService.js";

const reply = await chat([{ role: "user", content: "Hi" }]);
const data  = await chatJSON("You classify food. JSON only.", "veg biryani, 100 plates");
```

## 🧠 Whiteboard — the AI desk

```
   chatbot ──┐
   classifier ┤
   recommender┼──► aiService.js ──► AI provider
   summarizer ┘     (one key, one place,
                     shared error handling)

   Swap provider/model? Change ONE file.
```

## 🏋️ Practice
1. Create `services/aiService.js` with `chat` and `chatJSON`.
2. Use `chat()` from a test route.
3. Use `chatJSON()` to classify a food.
4. Add a `model` option and override it on one call.
5. Explain why centralizing AI calls is better than scattering them.

## 💬 Interview Questions
- Why wrap all AI calls in one service module?
- What's the benefit when switching providers?
- How would you add shared logging to every AI call?
- Why default `temperature` differently for chat vs JSON?

---

# 📦 Module 5: Building the Chatbot — Backend

## What gives a chatbot "memory"?

**Real-life analogy:** A good receptionist remembers what you said two minutes ago. But the AI is **stateless** — each call is a fresh intern who forgot everything. To create memory, you **resend the whole conversation** every time. The "memory" lives in *your* app, not the AI.

**Theory:** You keep an array of messages (`system`, then alternating `user`/`assistant`). Each new turn, you append the user's message, send the *entire* array, get the reply, and append that too.

## The chat route

**`controllers/chatController.js`:**
```javascript
import { chat } from "../services/aiService.js";

const SYSTEM = {
  role: "system",
  content: "You are the Zero Hunger assistant. Help users with food donation, " +
           "pickup scheduling, NGO matching, and volunteering. Be concise and friendly."
};

export const chatWithBot = async (req, res) => {
  try {
    const { history = [] } = req.body;   // the conversation so far, sent by the frontend

    // always put the system prompt first, then the conversation
    const messages = [SYSTEM, ...history];

    const reply = await chat(messages, { temperature: 0.6 });

    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: "AI is unavailable right now. Please try again." });
  }
};
```

**`routes/chatRoutes.js`:**
```javascript
import express from "express";
import { chatWithBot } from "../controllers/chatController.js";
const router = express.Router();
router.post("/", chatWithBot);
export default router;
```

Mount it in `server.js`:
```javascript
import chatRoutes from "./routes/chatRoutes.js";
app.use("/api/chat", chatRoutes);
```

## Trimming history (managing the context window)

**Real-life analogy:** You can't hand the intern a 500-page transcript for every question — too slow and expensive. Keep only the recent, relevant part.

```javascript
// keep the last 10 messages so we stay within the context window & control cost
const recent = history.slice(-10);
const messages = [SYSTEM, ...recent];
```

## 🧠 Whiteboard — how memory works

```
   TURN 1: [system, user:"hi"]                → reply:"hello!"
   TURN 2: [system, user:"hi", assistant:"hello!", user:"how do I donate?"]
                          (RESEND everything)  → reply:"Tap Donate Food…"

   The AI is stateless. YOU carry the history. Resend it each turn.
   Trim old messages to stay within the context window.
```

## 🏋️ Practice
1. Build the `/api/chat` route that accepts `history` and returns a `reply`.
2. Put a Zero Hunger persona in the system message.
3. Test with Postman: send a 2-message history and inspect the reply.
4. Add `history.slice(-10)` to trim old messages.
5. Return a friendly error message if the AI call fails.

## 💬 Interview Questions
- Why is an AI chatbot "stateless," and how do you give it memory?
- What does the frontend send on each chat request?
- Why and how do you trim conversation history?
- Where does the system prompt go in the messages array?

---

# 📦 Module 6: Building the Chatbot — Frontend (React)

**Real-life analogy:** The backend is the receptionist's brain; the frontend is the **chat window** the customer types into. The window collects messages, sends them to the brain, and shows replies.

**Theory:** React holds the conversation in **state** (an array of `{role, content}`). On send, you append the user message, POST the history to your backend, then append the reply. Everything you learned about React state, events, controlled inputs, and the three async states (loading/error/data) comes together here.

**`src/ChatBot.jsx`:**
```jsx
import { useState } from "react";
import api from "./api";                    // the Axios instance from the Node module

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm the Zero Hunger assistant. How can I help?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    const newHistory = [...messages, userMsg];   // spread — immutable update
    setMessages(newHistory);
    setInput("");
    setLoading(true);

    try {
      // send only role+content turns (skip the greeting if you like)
      const history = newHistory.filter(m => m.role !== "system");
      const { data } = await api.post("/chat", { history });
      setMessages([...newHistory, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...newHistory, { role: "assistant", content: "Sorry, I'm having trouble right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto border rounded-xl p-4 bg-white">
      <div className="h-80 overflow-y-auto flex flex-col gap-2 mb-3">
        {messages.map((m, i) => (
          <div key={i}
            className={`px-3 py-2 rounded-lg max-w-[80%] ${
              m.role === "user"
                ? "bg-green-600 text-white self-end"
                : "bg-gray-100 text-gray-800 self-start"}`}>
            {m.content}
          </div>
        ))}
        {loading && <div className="self-start text-gray-400 text-sm">typing…</div>}
      </div>

      <form onSubmit={send} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about donating food…"
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button disabled={loading}
          className="bg-green-600 text-white px-4 rounded-lg disabled:bg-gray-300">
          Send
        </button>
      </form>
    </div>
  );
}
```

## 🧠 Whiteboard — the chat loop

```
   user types ──► append {role:"user"} to state ──► POST history to backend
                                                          │
   show reply ◄── append {role:"assistant"} ◄── reply ◄──┘
   (loading "typing…" shown while waiting)

   State carries the conversation; the backend carries the AI key.
```

## 🏋️ Practice
1. Build the chat UI with a message list and a controlled input.
2. Append the user message to state on send.
3. POST the history to `/api/chat` and append the reply.
4. Show a "typing…" indicator while loading.
5. Style user vs assistant bubbles differently (alignment + color).

## 💬 Interview Questions
- Where does the conversation state live, and why?
- Why append messages immutably (spread)?
- How does the frontend show a loading state?
- What does the frontend send to the backend on each turn?
- Why never call the AI provider directly from React?

---

# 📦 Module 7: Streaming Responses

## Why stream?

**Real-life analogy:** A long answer that appears all at once after a 5-second pause feels broken. Streaming is like watching someone **type live** — words appear as they're generated. It *feels* instant even though the total time is the same.

**Theory:** Instead of waiting for the whole completion, you request a **stream** and receive the reply in small **chunks**, forwarding each to the frontend as it arrives. This is an advanced touch that makes chatbots feel professional.

## Backend: stream the chunks

```javascript
export const streamChat = async (req, res) => {
  const { history = [] } = req.body;

  // Server-Sent Events headers
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,                                   // ← the key flag
      messages: [SYSTEM, ...history]
    });

    for await (const chunk of stream) {               // async iteration!
      const token = chunk.choices[0]?.delta?.content || "";
      if (token) res.write(`data: ${JSON.stringify(token)}\n\n`);
    }
    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err) {
    res.write(`data: ${JSON.stringify("[ERROR]")}\n\n`);
    res.end();
  }
};
```

## Frontend: read the stream

```jsx
const sendStreaming = async (history) => {
  const res = await fetch("http://localhost:5000/api/chat/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ history })
  });

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let reply = "";

  // add an empty assistant bubble we'll fill in live
  setMessages(m => [...m, { role: "assistant", content: "" }]);

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const text = decoder.decode(value);
    for (const line of text.split("\n\n")) {
      if (!line.startsWith("data: ")) continue;
      const payload = line.replace("data: ", "");
      if (payload === "[DONE]") return;
      const token = JSON.parse(payload);
      reply += token;
      // update the LAST message live
      setMessages(m => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: reply };
        return copy;
      });
    }
  }
};
```

## 🧠 Whiteboard — streaming vs waiting

```
   NON-STREAM:  [....... waiting 4s .......] → whole answer appears
   STREAM:      Z..e..r..o.. .H..u..n..g..e..r..  (words appear as typed)

   stream:true → backend forwards each token → frontend appends live
```

## 🏋️ Practice
1. Add a `stream: true` route using Server-Sent Events.
2. Forward each token with `res.write`.
3. On the frontend, read the stream and build the reply live.
4. Append tokens to the last assistant message in state.
5. Handle the `[DONE]` and `[ERROR]` signals.

## 💬 Interview Questions
- Why stream AI responses?
- What does `stream: true` change about the response?
- What is a "chunk"/"delta"?
- How does the frontend render tokens as they arrive?
- What are Server-Sent Events?

---

# 📦 Module 8: File Upload & Processing

## Receiving files on the server

**Real-life analogy:** A drop-box at the donation center. Someone drops in a photo of the food or a PDF list; staff pick it up, check it, and file it. **Multer** is the staff member who receives uploaded files in Express.

**Theory:** Browsers send files as `multipart/form-data` (not JSON), so `express.json()` can't read them. **Multer** middleware parses the upload and hands you the file at `req.file`.

**`middleware/upload.js`:**
```javascript
import multer from "multer";

const storage = multer.memoryStorage();   // keep the file in memory as a buffer

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },   // 5 MB cap — protect your server
  fileFilter: (req, file, cb) => {
    // only allow images (and pdf if you want documents)
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only image files are allowed"));
  }
});
```

## The upload route

```javascript
import { upload } from "../middleware/upload.js";

// upload.single("photo") → expects a form field named "photo"
router.post("/upload", upload.single("photo"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    sizeKB: Math.round(req.file.size / 1024)
  });
});
```

## Sending the file from React

```jsx
const uploadPhoto = async (file) => {
  const formData = new FormData();      // NOT JSON — files go in FormData
  formData.append("photo", file);
  const { data } = await api.post("/ai/upload", formData);
  return data;
};

// in JSX:
<input type="file" accept="image/*"
  onChange={(e) => uploadPhoto(e.target.files[0])} />
```

## Where do files actually live?

**Real-life analogy:** You wouldn't store every donated parcel in your office forever. Big files belong in a **warehouse** (cloud storage like Cloudinary or AWS S3); your database stores only the **address** (the URL).

**Theory:** For production, upload the buffer to cloud storage, save the returned URL in MongoDB, and keep your database light. For learning, memory or local disk is fine.

## 🧠 Whiteboard — the upload pipeline

```
   React <input type="file"> → FormData → POST (multipart/form-data)
                                              │
                                       Multer parses → req.file (buffer)
                                              │
                          validate type+size → process (AI) / store (cloud)
                                              │
                                  save URL + result in MongoDB
```

## 🏋️ Practice
1. Add Multer with a 5 MB limit and image-only filter.
2. Build an `/api/ai/upload` route returning the file's name/type/size.
3. Upload an image from React using `FormData`.
4. Reject a non-image file and confirm the error.
5. (Stretch) Store the file in Cloudinary and save the URL in MongoDB.

## 💬 Interview Questions
- Why can't `express.json()` read file uploads?
- What does Multer do, and where's the file afterward?
- Why limit file size and type?
- Why store files in cloud storage and only the URL in the DB?
- How do you send a file from React?

---

# 📦 Module 9: Vision — AI Food Classification

**Real-life analogy:** A trained volunteer glances at a tray and says "that's about 80 veg servings of biryani, looks fresh." A **vision-capable** AI model can do the same from a photo.

**Theory:** Modern multimodal models accept **images as input** alongside text. You send the image (as a URL or base64 data) plus a question, and ask for **JSON** so the result slots straight into your donation record. This powers Zero Hunger's **food classification** and **quality reporting**.

## Sending an image to the model

```javascript
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const classifyFood = async (imageBuffer, mimetype) => {
  // turn the uploaded buffer into a data URL the model can read
  const base64 = imageBuffer.toString("base64");
  const dataUrl = `data:${mimetype};base64,${base64}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",                  // a vision-capable model
    temperature: 0,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content:
        "You analyze photos of food donations. Reply with JSON only." },
      { role: "user", content: [
        { type: "text", text:
          'Identify the food. Reply as JSON with keys: "food" (string), ' +
          '"type" ("Veg" or "Non-Veg"), "estimatedServings" (number), ' +
          '"freshness" ("Fresh","Okay","Spoiled").' },
        { type: "image_url", image_url: { url: dataUrl } }
      ]}
    ]
  });

  try { return JSON.parse(completion.choices[0].message.content); }
  catch { return null; }
};
```

## The classification route

```javascript
import { upload } from "../middleware/upload.js";
import { classifyFood } from "../services/visionService.js";

router.post("/classify", upload.single("photo"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No image" });
    const result = await classifyFood(req.file.buffer, req.file.mimetype);
    if (!result) return res.status(502).json({ error: "Could not classify" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Classification failed" });
  }
});
```
```
▶ { food: "Vegetable Biryani", type: "Veg", estimatedServings: 90, freshness: "Fresh" }
```

You can now auto-fill part of the donation form and flag spoiled food for quality control.

## Reading documents (PDF/text)

**Real-life analogy:** For a typed list of items, you don't need eyes — you need reading. Extract the text first (e.g., with a PDF parser), then send the **text** to the AI to summarize or structure.

```javascript
// pseudo-flow for a document
const text = await extractTextFromPdf(req.file.buffer);   // a PDF library
const data = await chatJSON(
  "You extract structured data from donation lists. JSON only.",
  `Extract items as a JSON array of {food, qty} from:\n${text}`
);
```

## 🧠 Whiteboard — vision classification

```
   food photo ──► base64 data URL ──► vision model + "reply JSON"
                                              │
                              { food, type, estimatedServings, freshness }
                                              │
                       auto-fill donation form + flag spoiled items
```

## 🏋️ Practice
1. Build a `classifyFood` service that sends an image and returns JSON.
2. Wire a `/api/ai/classify` route using Multer + the service.
3. Upload a food photo from React and display the classification.
4. Use the result to pre-fill `food` and `type` in the donation form.
5. (Stretch) Extract text from a PDF list and structure it with `chatJSON`.

## 💬 Interview Questions
- What is a multimodal/vision model?
- How do you send an image to the model?
- Why request JSON from a classification call?
- How would this power "food quality reporting"?
- Difference between processing an image vs a document?

---

# 📦 Module 10: Recommendation Feature

**Real-life analogy:** A smart dispatcher who, given a fresh donation, instantly knows *which* NGO is the best fit — closest, has capacity, accepts that food type — and can explain why.

**Theory:** Recommendations don't have to be "pure AI." The reliable pattern is **code does the math, AI does the explanation**. You compute a score with normal JavaScript (fast, free, predictable), then optionally let the AI rank or justify the top picks (helpful, human-readable). This is more accurate and far cheaper than asking AI to do everything.

## Step 1 — score with code

```javascript
// services/recommendService.js
const scoreNGO = (donation, ngo) => {
  let score = 0;
  if (ngo.acceptedFoods.includes(donation.type)) score += 50;   // food-type match
  if (ngo.city === donation.city) score += 30;                  // same city
  score += Math.max(0, 20 - ngo.distanceKm);                    // closer = better
  if (ngo.capacity >= donation.qty) score += 20;                // can handle the amount
  return score;
};

export const rankNGOs = (donation, ngos) =>
  [...ngos]                                   // copy before sorting (immutability!)
    .map(ngo => ({ ...ngo, score: scoreNGO(donation, ngo) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);                             // top 3
```

## Step 2 — let AI explain the top pick

```javascript
import { chat } from "./aiService.js";

export const explainMatch = async (donation, topNGO) => {
  return chat([
    { role: "system", content: "You explain food-donation matches in one friendly sentence." },
    { role: "user", content:
      `Donation: ${JSON.stringify(donation)}.
       Best NGO: ${JSON.stringify(topNGO)}.
       In one sentence, explain why this NGO is the best match.` }
  ], { temperature: 0.4, maxTokens: 60 });
};
```

## The route

```javascript
router.post("/match", protect, async (req, res) => {
  try {
    const { donation } = req.body;
    const ngos = await NGO.find();                   // from MongoDB
    const top = rankNGOs(donation, ngos);
    const reason = await explainMatch(donation, top[0]);
    res.json({ recommendations: top, reason });
  } catch (err) {
    res.status(500).json({ error: "Matching failed" });
  }
});
```
```
▶ {
    recommendations: [ {name:"Helping Hands", score:118}, ... ],
    reason: "Helping Hands is the best match because it's in Pune, accepts veg food, and has capacity for 100 servings."
  }
```

## 🧠 Whiteboard — hybrid recommendation

```
   donation + all NGOs
        │
   CODE: score each NGO (food match, distance, capacity)  ← fast, free, reliable
        │  sort, take top 3
        ▼
   AI: write a one-line reason for the #1 pick           ← human-friendly
        │
   return { top3, reason }

   Rule: let code do the math, AI do the wording.
```

## 🏋️ Practice
1. Write `scoreNGO` and `rankNGOs` (pure JavaScript, no AI).
2. Return the top 3 NGOs for a donation.
3. Add `explainMatch` to generate a one-line reason via AI.
4. Build the `/api/ai/match` route combining both.
5. Discuss: why not let AI do the scoring too?

## 💬 Interview Questions
- Why split scoring (code) from explanation (AI)?
- What makes the code-based score more reliable than pure AI?
- How would you weight the scoring factors?
- Why copy the array before sorting?
- How does this map to Zero Hunger's "NGO matching"?

---

# 📦 Module 11: Summarization Feature

**Real-life analogy:** A manager doesn't read 200 individual logs each morning — they read a one-paragraph briefing. **Summarization** turns long, messy data into a short, useful digest for the admin dashboard.

**Theory:** You feed the AI a chunk of text or data and ask for a concise summary in a fixed format. Great for: a daily activity digest, condensing volunteer notes, or turning many notifications into one readable update.

```javascript
import { chat } from "../services/aiService.js";

export const summarizeActivity = async (donations) => {
  // turn the data into compact text for the prompt
  const lines = donations
    .map(d => `${d.food} x${d.qty} from ${d.donor} (${d.status})`)
    .join("\n");

  return chat([
    { role: "system", content: "You write short daily summaries for a food-donation admin dashboard." },
    { role: "user", content:
      `Summarize today's donation activity in 3 short bullet points, highlighting totals and anything urgent:\n${lines}` }
  ], { temperature: 0.3, maxTokens: 150 });
};
```

The route:
```javascript
router.get("/summary", protect, allow("admin"), async (req, res) => {
  try {
    const today = await Donation.find(/* today's filter */);
    const summary = await summarizeActivity(today);
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ error: "Summary failed" });
  }
});
```
```
▶ • 12 donations today totaling 640 servings, mostly veg.
  • 3 pickups still pending in Pune — needs a volunteer.
  • 1 donation flagged "Spoiled" by quality check — discard.
```

## 🧠 Whiteboard — summarization

```
   many records ──► compact text ──► AI: "3 bullets, highlight urgent"
                                            │
                                   short digest for the dashboard
   Keep temperature low (factual). Cap tokens (it's a summary).
```

## 🏋️ Practice
1. Write `summarizeActivity` that turns donations into a 3-bullet digest.
2. Restrict the `/api/ai/summary` route to admins.
3. Use a low temperature and a token cap.
4. Ask it to highlight anything "urgent."
5. Show the summary at the top of the React admin dashboard.

## 💬 Interview Questions
- What is summarization good for in this app?
- Why use a low temperature for summaries?
- How do you turn structured data into a prompt?
- Why cap `max_tokens` here?
- Who should be allowed to see the summary, and how do you enforce it?

---

# 📦 Module 12: Error Handling & Reliability

**Real-life analogy:** The intern occasionally calls in sick, gets overwhelmed with requests, or takes too long. A professional office has backup plans so the *customer* never sees chaos. Your AI features must degrade **gracefully** — a calm fallback, never a crash.

**Theory:** AI calls can fail in ways normal code doesn't: the network drops, you hit a **rate limit** (429), the request **times out**, or the model returns junk. Robust code anticipates each.

## Always wrap and translate errors

```javascript
export const safeChat = async (messages, options) => {
  try {
    return await chat(messages, options);
  } catch (err) {
    console.error("AI error:", err.message);          // log for you
    return null;                                       // calm signal for callers
  }
};
```
The route then chooses a friendly fallback:
```javascript
const reply = await safeChat(messages);
res.json({ reply: reply ?? "I'm having trouble right now — please try again shortly." });
```

## Handle rate limits with retry + backoff

**Real-life analogy:** If the line is busy, you don't call 50 times a second — you wait a bit longer each time before redialing.

```javascript
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

export const withRetry = async (fn, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const isRateLimit = err.status === 429;
      if (attempt === retries || !isRateLimit) throw err;
      await sleep(attempt * 1000);        // 1s, 2s, 3s — exponential-ish backoff
    }
  }
};

// usage
const reply = await withRetry(() => chat(messages));
```

## Add a timeout (don't hang forever)

```javascript
const withTimeout = (promise, ms) =>
  Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("AI timeout")), ms))
  ]);

const reply = await withTimeout(chat(messages), 15000);   // 15s max
```

## Validate AI output before trusting it

**Real-life analogy:** Check the intern's homework before sending it to a client.

```javascript
const data = await chatJSON(systemPrompt, userPrompt);
if (!data || !data.type || typeof data.estimatedServings !== "number") {
  return res.status(502).json({ error: "Could not classify reliably" });
}
```

## 🧠 Whiteboard — layers of safety

```
   AI CALL
     ├─ try/catch        → never crash the server
     ├─ timeout          → never hang forever
     ├─ retry + backoff  → survive rate limits (429)
     ├─ validate output  → never trust malformed JSON
     └─ fallback         → user sees a calm message, not an error
```

## 🏋️ Practice
1. Wrap an AI call so a failure returns `null` instead of throwing.
2. Add a friendly fallback message in the route.
3. Implement `withRetry` with backoff for 429s.
4. Add a 15-second timeout to a call.
5. Validate a JSON classification before saving it.

## 💬 Interview Questions
- What ways can an AI call fail that normal code doesn't?
- What is a rate limit (429) and how do you handle it?
- Why add a timeout?
- What does "graceful degradation" mean here?
- Why validate AI output before using it?

---

# 📦 Module 13: Optimization (Cost, Speed, Reliability)

**Real-life analogy:** You don't send your most expensive senior consultant to fetch coffee. Match the **task to the cheapest tool that does it well**, and don't pay twice for the same answer.

**Theory:** AI features can get slow and expensive fast. Four main levers keep them lean.

## Lever 1 — Pick the right model

| Task | Model choice |
|------|--------------|
| Simple classification, short replies | small/cheap/fast model |
| Complex reasoning, nuanced writing | larger/stronger model |

Use your `aiService` to route cheap tasks to cheap models:
```javascript
const reply = await chat(messages, { model: "gpt-4o-mini" });   // cheap default
```

## Lever 2 — Control tokens

**Real-life analogy:** Pay for a postcard, not a novel, when a postcard will do.

```javascript
// trim history, cap output, keep prompts tight
const messages = [SYSTEM, ...history.slice(-8)];
const reply = await chat(messages, { maxTokens: 200 });
```

## Lever 3 — Cache repeated answers

**Real-life analogy:** If ten people ask "what are your opening hours?", you don't phone the manager ten times — you remember the answer.

```javascript
const cache = new Map();   // for production, use Redis

export const cachedClassify = async (key, fn) => {
  if (cache.has(key)) return cache.get(key);    // instant + free
  const result = await fn();
  cache.set(key, result);
  return result;
};

// e.g. cache by a normalized food description
const result = await cachedClassify(food.toLowerCase(), () => classifyByText(food));
```

## Lever 4 — Don't call AI when code will do

**Real-life analogy:** Don't ask the consultant to add two numbers. The recommendation module already showed this: **code for math, AI for language.** The cheapest AI call is the one you never make.

## Measure what you spend

Log token usage so you can see costs:
```javascript
const completion = await openai.chat.completions.create({ /* ... */ });
console.log("tokens used:", completion.usage?.total_tokens);
```

## 🧠 Whiteboard — the optimization checklist

```
   Before shipping an AI feature, ask:
     □ Could plain code do this instead?        (cheapest = no call)
     □ Is this the smallest model that works?
     □ Is the prompt as short as possible?
     □ Is max_tokens capped?
     □ Is history trimmed?
     □ Can I cache repeated results?
     □ Am I logging token usage?
```

## 🏋️ Practice
1. Route a simple classification to a cheap model and reasoning to a stronger one.
2. Trim history to the last 8 messages and cap `maxTokens`.
3. Add an in-memory cache for repeated food classifications.
4. Log `usage.total_tokens` after a call.
5. Find one AI call in your app that plain code could replace.

## 💬 Interview Questions
- How do you reduce AI cost without hurting quality?
- When should you use a small model vs a large one?
- How does caching help, and what would you cache?
- Why is "code instead of AI" an optimization?
- How do you measure token usage?

---

# 📦 Module 14: Full MERN Integration & Project Structuring

**Real-life analogy:** All the appliances work; now you design the kitchen so everything has its place and a new cook can find it instantly. We fold every AI feature into the existing MERN app cleanly.

**Theory:** All AI logic lives behind services; routes stay thin; the frontend talks only to your backend. Here's how the pieces sit in the project you already built in the Node module.

## Folder structure (backend, AI added)

```
zero-hunger-api/
├── server.js
├── .env                         ← OPENAI_API_KEY lives here (gitignored)
├── config/db.js
├── models/
│   ├── Donation.js
│   ├── User.js
│   └── NGO.js
├── controllers/
│   ├── donationController.js
│   ├── authController.js
│   ├── chatController.js        ← chatbot
│   └── aiController.js          ← classify / match / summarize
├── services/                    ← ALL AI logic centralized here
│   ├── aiService.js             ← chat + chatJSON (one key, one place)
│   ├── visionService.js         ← food classification
│   ├── recommendService.js      ← scoring + explanation
│   └── summaryService.js        ← digests
├── middleware/
│   ├── auth.js
│   ├── role.js
│   └── upload.js                ← Multer
└── routes/
    ├── donationRoutes.js
    ├── authRoutes.js
    ├── chatRoutes.js            ← /api/chat
    └── aiRoutes.js              ← /api/ai/classify, /match, /summary
```

## Frontend structure (React, AI added)

```
zero-hunger-ui/src/
├── api.js                       ← Axios + token interceptor
├── components/
│   ├── DonationForm.jsx
│   ├── DonationCard.jsx
│   ├── ChatBot.jsx              ← the chat widget
│   └── FoodClassifier.jsx       ← upload + show classification
└── pages/
    ├── Board.jsx
    └── AdminDashboard.jsx       ← shows the AI summary
```

## Wiring it in `server.js`

```javascript
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/chat", chatRoutes);          // chatbot
app.use("/api/ai", aiRoutes);              // classify / match / summarize

app.listen(process.env.PORT || 5000, () => console.log("Server running"));
```

## The golden principles (memorize these)

```
1. The AI key NEVER leaves the backend.
2. ALL AI calls go through services/ (one place to change).
3. Every AI feature has error handling + a fallback.
4. Routes stay thin; logic lives in services/controllers.
5. Use code where you can; use AI where you must.
6. Cap tokens, trim history, cache repeats.
```

## 🧠 Whiteboard — the integrated stack

```
   REACT (ChatBot, FoodClassifier, AdminDashboard)
        │ Axios + JWT
        ▼
   EXPRESS routes (thin) → controllers → services/ ──► AI PROVIDER
        │                                  (key, retries, cache)
        ▼
   MongoDB (donations, users, ngos)  ←── AI results stored here
```

## 🏋️ Practice
1. Reorganize your AI code so every call goes through `services/`.
2. Add `chatRoutes` and `aiRoutes` to `server.js`.
3. Confirm the chatbot, classifier, matcher, and summary all work end-to-end.
4. Verify the API key appears in no frontend file and no commit.
5. Write the six golden principles in your own words.

## 💬 Interview Questions
- How is AI logic organized in a clean MERN app?
- Why keep routes thin and logic in services?
- How do you ensure the API key never leaks?
- Walk through a food-photo upload from React to stored classification.
- What are your rules for adding any new AI feature?

---

# 🏆 FINAL MINI-PROJECT: Zero Hunger AI Assistant

> **Goal:** Add a complete AI layer to your MERN app using **every concept** in this module — a chatbot, food-photo classification, NGO recommendation, and an admin summary — all behind a clean, safe, optimized backend service.

## 📋 Features
- 💬 **Chatbot** with memory and a Zero Hunger persona
- 📷 **Food classifier** — upload a photo → AI returns food, type, servings, freshness
- 🎯 **NGO recommender** — code scores, AI explains the top match
- 📊 **Admin summary** — AI digests today's donations
- 🛡️ Error handling, fallbacks, token control — throughout

## 🗂️ Concept → file map

| Concept | File |
|---------|------|
| AI service wrapper | `services/aiService.js` |
| Vision classification | `services/visionService.js` |
| Recommendation (code + AI) | `services/recommendService.js` |
| Summarization | `services/summaryService.js` |
| Chatbot | `controllers/chatController.js`, `src/ChatBot.jsx` |
| File upload | `middleware/upload.js` |
| Error handling / retry | inside services |
| Frontend integration | `src/FoodClassifier.jsx` |

## 💻 Backend (key files)

**`.env`**
```
OPENAI_API_KEY=sk-...
MONGO_URI=...
JWT_SECRET=...
```

**`services/aiService.js`** (the one desk everything routes through)
```javascript
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const MODEL = "gpt-4o-mini";
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// retry wrapper for rate limits
const withRetry = async (fn, retries = 3) => {
  for (let a = 1; a <= retries; a++) {
    try { return await fn(); }
    catch (err) {
      if (a === retries || err.status !== 429) throw err;
      await sleep(a * 1000);
    }
  }
};

export const chat = async (messages, opt = {}) =>
  withRetry(async () => {
    const c = await openai.chat.completions.create({
      model: opt.model || MODEL,
      temperature: opt.temperature ?? 0.5,
      max_tokens: opt.maxTokens || 400,
      messages
    });
    return c.choices[0].message.content;
  });

export const chatJSON = async (system, user) =>
  withRetry(async () => {
    const c = await openai.chat.completions.create({
      model: MODEL, temperature: 0,
      response_format: { type: "json_object" },
      messages: [{ role: "system", content: system }, { role: "user", content: user }]
    });
    try { return JSON.parse(c.choices[0].message.content); } catch { return null; }
  });
```

**`controllers/chatController.js`**
```javascript
import { chat } from "../services/aiService.js";
const SYSTEM = { role: "system", content:
  "You are the Zero Hunger assistant. Help with donations, pickups, NGO matching, and volunteering. Be concise and friendly." };

export const chatWithBot = async (req, res) => {
  try {
    const { history = [] } = req.body;
    const reply = await chat([SYSTEM, ...history.slice(-10)], { temperature: 0.6 });
    res.json({ reply });
  } catch (err) {
    console.error("chat error:", err.message);
    res.json({ reply: "I'm having trouble right now — please try again shortly." });
  }
};
```

**`services/visionService.js`**
```javascript
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const classifyFood = async (buffer, mimetype) => {
  const dataUrl = `data:${mimetype};base64,${buffer.toString("base64")}`;
  try {
    const c = await openai.chat.completions.create({
      model: "gpt-4o-mini", temperature: 0,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "You analyze food donation photos. JSON only." },
        { role: "user", content: [
          { type: "text", text:
            'Reply as JSON: {"food":string,"type":"Veg"|"Non-Veg","estimatedServings":number,"freshness":"Fresh"|"Okay"|"Spoiled"}' },
          { type: "image_url", image_url: { url: dataUrl } }
        ]}
      ]
    });
    return JSON.parse(c.choices[0].message.content);
  } catch (err) {
    console.error("vision error:", err.message);
    return null;
  }
};
```

**`services/recommendService.js`**
```javascript
import { chat } from "./aiService.js";

const scoreNGO = (d, ngo) => {
  let s = 0;
  if (ngo.acceptedFoods?.includes(d.type)) s += 50;
  if (ngo.city === d.city) s += 30;
  s += Math.max(0, 20 - (ngo.distanceKm || 20));
  if ((ngo.capacity || 0) >= d.qty) s += 20;
  return s;
};

export const rankNGOs = (d, ngos) =>
  [...ngos].map(n => ({ ...n, score: scoreNGO(d, n) }))
           .sort((a, b) => b.score - a.score).slice(0, 3);

export const explainMatch = (d, top) =>
  chat([
    { role: "system", content: "Explain a food-donation match in one friendly sentence." },
    { role: "user", content: `Donation: ${JSON.stringify(d)}. Best NGO: ${JSON.stringify(top)}. Why is it the best match?` }
  ], { temperature: 0.4, maxTokens: 60 });
```

**`controllers/aiController.js`**
```javascript
import { classifyFood } from "../services/visionService.js";
import { rankNGOs, explainMatch } from "../services/recommendService.js";
import NGO from "../models/NGO.js";

export const classify = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No image" });
  const result = await classifyFood(req.file.buffer, req.file.mimetype);
  if (!result) return res.status(502).json({ error: "Could not classify" });
  res.json(result);
};

export const match = async (req, res) => {
  try {
    const { donation } = req.body;
    const ngos = await NGO.find();
    const top = rankNGOs(donation, ngos);
    const reason = top.length ? await explainMatch(donation, top[0]) : "No NGOs available.";
    res.json({ recommendations: top, reason });
  } catch (err) {
    res.status(500).json({ error: "Matching failed" });
  }
};
```

**`routes/aiRoutes.js`**
```javascript
import express from "express";
import { upload } from "../middleware/upload.js";
import { protect } from "../middleware/auth.js";
import { classify, match } from "../controllers/aiController.js";
const router = express.Router();
router.post("/classify", protect, upload.single("photo"), classify);
router.post("/match", protect, match);
export default router;
```

## 💻 Frontend (React)

**`src/FoodClassifier.jsx`**
```jsx
import { useState } from "react";
import api from "./api";

export default function FoodClassifier() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onUpload = async (file) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("photo", file);
    try {
      setLoading(true); setError(null);
      const { data } = await api.post("/ai/classify", formData);
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.error || "Classification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto border rounded-xl p-4 bg-white">
      <h3 className="font-bold text-green-800 mb-2">Classify Food Photo</h3>
      <input type="file" accept="image/*" onChange={(e) => onUpload(e.target.files[0])} />
      {loading && <p className="text-gray-400 mt-2">Analyzing…</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
      {result && (
        <div className="mt-3 text-sm">
          <p><b>Food:</b> {result.food}</p>
          <p><b>Type:</b> {result.type}</p>
          <p><b>Servings:</b> {result.estimatedServings}</p>
          <p><b>Freshness:</b> {result.freshness}</p>
        </div>
      )}
    </div>
  );
}
```

Include `<ChatBot />` (from Module 6) and `<FoodClassifier />` in your pages.

## ▶️ How to Run
```bash
# Backend
cd zero-hunger-api
npm install openai multer
# add OPENAI_API_KEY to .env
npm run dev

# Frontend (separate terminal)
cd zero-hunger-ui
npm run dev
```

## 🧪 Test order
1. Chat: POST `/api/chat` with `{ "history": [{ "role":"user","content":"How do I donate?" }] }`
2. Classify: POST `/api/ai/classify` (form-data, field `photo` = a food image) + Bearer token
3. Match: POST `/api/ai/match` with `{ "donation": { "type":"Veg","city":"Pune","qty":100 } }`
4. Open React → chat with the bot, upload a food photo, see the classification

## 🚀 Ship it with Git
```bash
git add .
git commit -m "Zero Hunger AI assistant: chatbot, classifier, recommender"
git push
```
(Confirm `.env` is in `.gitignore` — the key must never be committed.)

## 🧩 Stretch Challenges
1. Add **streaming** to the chatbot (Module 7).
2. Add the **admin summary** route and show it on the dashboard.
3. **Cache** food classifications by normalized description.
4. Store classification results on the donation record in MongoDB.
5. Add a **timeout** and **retry** around the vision call.

---

## 🎓 Final Assessment Checklist

Students must demonstrate:

- [ ] Make an AI API call from the **backend** (key never in frontend)
- [ ] Write effective prompts (role, context, task, format)
- [ ] Get and parse **structured JSON** output
- [ ] Centralize calls in an **AI service**
- [ ] Build a working **chatbot** (frontend + backend) with memory
- [ ] Handle **file uploads** and process them
- [ ] Use a **vision** model for food classification
- [ ] Build a **recommendation** feature (code scoring + AI explanation)
- [ ] Build a **summarization** feature
- [ ] Add **error handling, retries, timeouts, fallbacks**
- [ ] **Optimize** (model choice, token control, caching)
- [ ] **Integrate** everything cleanly into the MERN app
- [ ] **Push** to GitHub with the key safely gitignored

## ➡️ Expected Outcome
You can now build AI-powered product features end to end. You're ready for:
**DevOps & Deployment (Docker, CI/CD, cloud) → the complete, deployed Zero Hunger capstone.**

---

*Training manual for the Zero Hunger Platform Bootcamp · AI Integration & Advanced Features. Ready to drop into `/Reading-Materials` or `/AI-Integration` in your GitHub repo.*
