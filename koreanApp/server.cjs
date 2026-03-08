const fs = require("fs");
const masterCopy = require("./master.json");
const prompt = require("prompt-sync")({signit:true});
const readline = require("readline");
process.stdin.setEncoding('utf8');

const qS = (rl, q) => new Promise(
    resolve => {
        rl.question(q, resolve);
    }
);

(async function main(){
    const master = structuredClone(masterCopy)

    let toAddEntry = prompt("Do you want to enter a new data (y/n): ") ;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    while (toAddEntry == 'y'){
        const category = (await qS(rl, "Cateory: ")).toLowerCase();
        const englishWord = (await qS(rl, "English word: ")).toLowerCase();;
        const koreanWord = await qS(rl, "Korean word: ");
        console.log(koreanWord);

        if(!(master.categories.includes(category))){
            console.log("New category")
            master.categories.push(category);
            master[`${category}`] = {}
        }else{
            console.log("Category exists")
        }

        console.log(master);


        master[category][englishWord] = koreanWord;
        const jsonString = JSON.stringify(master, null, 2);
        console.log(jsonString);
        fs.writeFileSync('master.json', jsonString);
        
        toAddEntry = prompt("Do you want to enter a new data (y/n): ") ;
        if(toAddEntry != 'y'){
            console.log(toAddEntry);
            break;
        }
    }
})();

