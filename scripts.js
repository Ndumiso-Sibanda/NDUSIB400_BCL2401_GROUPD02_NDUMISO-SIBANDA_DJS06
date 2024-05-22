// A list of provinces:
const provinces = [
 "Western Cape",
 "Gauteng",
 "Northern Cape",
 "Eastern Cape",
 "KwaZulu-Natal",
 "Free State",
];

// A list of names:
const names = [
 "Ashwin",
 "Sibongile",
 "Jan-Hendrik",
 "Sifso",
 "Shailen",
 "Frikkie",
];

// A list of products with prices:
const products = [
 { product: "banana", price: "2" },
 { product: "mango", price: 6 },
 { product: "potato", price: " " },
 { product: "avocado", price: "8" },
 { product: "coffee", price: 10 },
 { product: "tea", price: "" },
];

// 1. ForEach basics
console.log("1. ForEach Basics:");
names.forEach((name, index) => {
 console.log(`${name} (${provinces[index]})`);
});

//2.  Uppercase Transformation
console.log("\n2. Uppercase Transformation:");
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

//3. Name Lengths
console.log("\n3. Name Lengths:");
const nameLenths = names.map((name) => name.length);
console.log(nameLenths);

//4. Sorting
console.log("\n4. Sorting:");
const sortedProvinces = [...provinces].sort(); //Copied the array to avoid modifying the original
console.log(sortedProvinces);

//5. Filtering Cape
console.log("\n5. Filtering Cape:");
const filteredProvinces = provinces.filter(
 (province) => !province.includes("Cape")
);
console.log(filteredProvinces);
console.log("Remaining provinces count:", filteredProvinces.length);

//6. Finding 'S'
console.log("\n6. Finding 'S':");
const containsS = names.map((name) => name.includes("S"));
console.log(containsS);

// 7. Creating Object Mapping
console.log("\n7 Creating Object MApping:");
const nameProvinceMapping = names.reduce((acc, name, index) => {
 acc[name] = provinces[index];
 return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exercises

// 1. Log Products
console.log("\nAdvanced 1. Log Products:");
console.log(products.map((product) => product.product));
