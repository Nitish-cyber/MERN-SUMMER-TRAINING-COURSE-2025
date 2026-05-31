// Day 5: Mock Vendor Manager Feature Branch Implementation
const registeredVendors = [
    { name: "SafePack Solutions", location: "Sector 63, Noida", discountPackagingRate: 5, activeHub: true },
    { name: "EcoBox Distributors", location: "Connaught Place, Delhi", discountPackagingRate: 8, activeHub: true },
    { name: "ChillSafe Ice Packs", location: "Gurugram, Haryana", discountPackagingRate: 12, activeHub: false }
];

console.log("--- Zero Hunger Commercial Vendor Catalog ---");

// Filter active packaging hubs
const activeHubs = registeredVendors.filter(vendor => vendor.activeHub);

console.log("\nActive Vendor Packaging Partners:");
activeHubs.forEach(({ name, location, discountPackagingRate }) => {
    console.log(`- Vendor: ${name} | Location: ${location} | Cold Packing Discount Rate: $${discountPackagingRate} per pack.`);
});
