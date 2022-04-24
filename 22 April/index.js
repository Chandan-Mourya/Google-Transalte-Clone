function read(id){
    return document.getElementById(id).value;
}
    

//curl -X POST "https://libretranslate.com/detect" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=Hello%20world!&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
async function Translate(){
    try {
        let input=read("input-text");
        //console.log("input: ", input);
        const input_lang = read('inp-lang')
        const out_lang = read('out-lang')

        const res = await fetch("https://libretranslate.de/translate",{
            method: "POST",

            body:JSON.stringify({
                q:input,
                source:input_lang,
                target:out_lang,
                format:"text",
            }),

            //additional info about our request that server  might need to know

            headers:{
                "Content-type":"application/json",
            },
                        
        });

        const data = await res.json();
        console.log("data: ", data);

        document.getElementById("out-value").innerText = data.translatedText;


    }
    catch(err){
        console.log("err: ", err);

    }
   
}


let id;
function debounce(myfunc, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        myfunc();
    },delay)
}