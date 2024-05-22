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
