// Below is the Javascript program to check the frequency of elements in an array. Spot the errors in the following program.


function find(arr) {
    const frequencyMap = {};
    arr.forEach((element) => {
        if (frequencyMap[element]) {
            // error is like we use dot (.) we need to wrap element taht we track with square braces
            frequencyMap[element] = (frequencyMap[element] || 0) + 1;
        }
        // this line runs every time so added condition in 6. If it's occured earlier then increment count by 1 else 0  
        // frequencyMap[element] = 1;
    });
    return frequencyMap;
}
// we need to console.log here to get the output. 
console.log(find(['hello', 'world', 'hello', 'india', 'world']))// Output: {hello:2, world:2, india:1}





// Function for finding the occurance of vowel from the user input string
function findUniqueVowel(str) {
    // store all uppercase and lowercase vowels
    let vowel = "aeiouAEIOU"
    //  create map to tract the occurance of vowel in number of times -> str 
    let flag = {}
    // for loop helps to iteration over str
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        // we are checking is str a vowel or not
        if (vowel.includes(char)) {
            // inc the count of vowel if we get or else just assign it to 1 
            flag[char] = (flag[char] || 0) + 1
        }
    }
    // return flag
    return flag

}

console.log(findUniqueVowel("happyJourney"))










let users = [

    {

        name: 'Arvind',

        age: 21,

        gender: 'MALE',

        documents: ['Adhar', '12_Marksheet']

    },

    {

        name: 'Sunil',

        age: 15,

        gender: 'MALE',

        documents: ['Pancard', 'Passport']

    },

    {

        name: 'Rahul',

        age: 18,

        gender: 'MALE',

        documents: ['10_Marksheet']

    },

    {

        name: 'Neha',

        age: 21,

        gender: 'FFMALE',

        documents: ['Adhar', '1O_Marksheet', 'Pancard']

    },

    {

        name: 'Tanu',

        age: 21,

        gender: 'FFMALE',

        documents: []

    }
]

let selectedDocuments = ['Adhar', '1O_Marksheet']

let report = users.filter(user => {
    return selectedDocuments.every(doc => user.documents.includes(doc))
})
console.log(report)




