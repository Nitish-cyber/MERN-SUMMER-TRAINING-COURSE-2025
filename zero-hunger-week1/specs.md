# Zero Hunger Platform · Core System Specifications

## 1. Project Overview
Zero Hunger connects surplus food donors (restaurants, hotels) with logistics volunteers and food distribution NGOs to eliminate localized food waste.

## 2. Core Entities
*   **Donor**: Establishes donor locations, rating profiles, and operating hours.
*   **NGO**: Establishes distribution capacity and location registries.
*   **Volunteer**: Community drivers with registered vehicles and active delivery statuses.
*   **Donation**: Food packages containing names, quantities, and expiration hours.

## 3. Mock Endpoint Routing Matrix
*   `POST /api/donors` -> Submit a new donor registration.
*   `POST /api/donations` -> Create an active food surplus package.
*   `GET /api/donations/active` -> Fetch all available unclaimed food packages.
*   `PUT /api/donations/:id/claim` -> Mark a donation as claimed by a volunteer.
*   `POST /api/ngos` -> Register an NGO (Requires parameters: `ngoName`, `locationName`, `beneficiaryCount`).
