setTimeout(()=>{
    for(let i=0; i< 1000000000; i++){

    };
    console.log("Iteration done");
},1000);


console.log("This code will not wait for its execution because the settimeout runs in backround and continue the code execution");
