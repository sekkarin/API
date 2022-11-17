

async function add() {
    console.log("ADD");
    const id = document.getElementById("id").value
    const mytype = document.getElementById("type").value
    const name = document.getElementById("name").value
    const image = document.getElementById("image").value
    const data = {
        id:id,
        type:mytype,
        name:name,
        imageURL:image
        
    }
    try {
        await fetch(`http://127.0.0.1:3001/restuarants`,
            {
                method: "POST",
                mode: 'cors', cache: 'no-cache',
                credentials: 'same-origin', headers: { "Content-Type": "application/json" },
                body:JSON.stringify(data)
            }
        )
    }
    catch (err) {
        console.log(err);
    }

}