

const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Headphones", category: "Electronics" },
    { id: 3, name: "Chair", category: "Furniture" }
];

const sales = [
    { saleId: 101, productId: 1, quantity: 2, revenue: 1200 },
    { saleId: 102, productId: 2, quantity: 5, revenue: 500 },
    { saleId: 103, productId: 3, quantity: 3, revenue: 900 },
    { saleId: 104, productId: 2, quantity: 2, revenue: 200 }
];

const enrichedSales = sales.map(sale => {
    const product = products.find(p => p.id === sale.productId);
    return {
        ...sale,
        productName: product.name,
        category: product.category
    };
});
console.log(enrichedSales)




const students = [
    { id: 1, name: 'Avi' },
    { id: 2, name: 'Riya' }
];

const marks = [
    { studentId: 1, subject: 'Math', marks: 90 },
    { studentId: 1, subject: 'English', marks: 70 },
    { studentId: 2, subject: 'Math', marks: 80 }
];

const report = students.map(student => {
    const studentMarks = marks.filter(m => m.studentId === student.id)
    const subjects = studentMarks.map(m => m.subject)
    const total = marks.reduce((sum, m) => sum + m.marks, 0)
    const average = studentMarks.length ? total / studentMarks.length : 0
    return {
        name: student.name,
        subjects,
        average: Math.round(average),
    }
}
)
console.log(report)

// const report = students.map(student => {
//     const studentMarks = marks.filter(m => m.studentId === student.id);
//     const subjects = studentMarks.map(m => m.subject);
//     const total = studentMarks.reduce((sum, m) => sum + m.marks, 0);
//     const average = studentMarks.length ? total / studentMarks.length : 0;

//     return {
//         name: student.name,
//         subjects,
//         average: Math.round(average)
//     };
// });

// console.log(report);

// function getFullVerifiedUsers(users, required) {
//     return users
//         .filter(user => required.every(doc => user.docs.includes(doc)))
//         .map(user => user.id)
// }
// const selectedDocuments = ["passport", "photo", "proofOfAddress"];

// const users = [
//     { id: 1, name: "Arjun", docs: ["passport", "photo"] },
//     { id: 2, name: "Beena", docs: ["passport", "photo", "proofOfAddress"] },
//     { id: 3, name: "Chandra", docs: ["photo", "proofOfAddress", "passport"] },
// ];
// console.log(getFullVerifiedUsers(users, selectedDocuments))

// function checkVowelCount(str) {
//     let vowel = new Set()
//     for (const char of str.toLowerCase()) {
//         if ("aeiou".includes(char))
//             vowel.add(char)
//     }
//     return vowel.size
// }

// console.log(checkVowelCount("absfkkfeiiiirhrh"))
