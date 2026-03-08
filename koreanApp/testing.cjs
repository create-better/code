// Enable UTF-8 input/output
process.stdin.setEncoding('utf8');

const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for Korean input
rl.question('한글을 입력하세요: ', (answer) => {
  console.log(`입력한 내용: ${answer}`);
  rl.close();
});


//----------------------------------

const category = prompt("Enter category of the word: ");
if(!(master.categories.includes(category))){
    console.log("New category")
    master.categories.push(category);
}else{
    console.log("Category exists")
}

const englishWord = prompt("English word: ");

rl.question("Korean word: ", (answer)=>{
    master[`${category}`][englishWord] = answer;
    console.log(master);
    const jsonString = JSON.stringify(master, null, 2);
    console.log(jsonString);
    fs.writeFileSync('master.json', jsonString);
    rl.close();
});


//---------------------------------


            if(!(master.categories.includes(category))){
                console.log("New category")
                master.categories.push(category);
            }else{
                console.log("Category exists")
            }

            master[`${category}`][englishWord] = koreanWord;
            const jsonString = JSON.stringify(master, null, 2);
            console.log(jsonString);
            fs.writeFileSync('master.json', jsonString);