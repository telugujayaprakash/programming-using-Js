//node readFile program
import {readFile,writeFile,appendFile,unlink} from 'fs/promises'

async function read(){
    const data=await readFile('checkprime.js','utf-8')
    console.log(data)
}
read()

//node writeFile program

async function write(){
    const data=await writeFile('checks.js','hello world').then(()=>{
        console.log("file written successfully")
    }).catch((err)=>{
        console.log(err)
    })
}
write()

//node appendFile program

async function append(){
    const data=await appendFile('checks.js','\n welcome to node js').then(()=>{
        console.log("file appended successfully")
    }).catch((err)=>{
        console.log(err)
    })
}
append()

//node deleteFile program

async function deleteFile(){
    const data=await unlink('checks.js').then(()=>{
        console.log("file deleted successfully")
    }).catch((err)=>{
        console.log(err)
    })  
}
deleteFile()