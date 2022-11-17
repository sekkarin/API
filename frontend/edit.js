async function update() {
    console.log("UPDATE");
    // const id = 
    const url = new URL(document.location).searchParams
    const id = url.get("id");
    const mytype = document.getElementById("type").value
    const name = document.getElementById("name").value
    const image = document.getElementById("image").value
    console.log(id);
    try {
        const allRestaurant = await fetch(`http://localhost:3000/restaurant/update/${id}/?name=${name}&type=${mytype}&imageurl=${image}`,
            {
                method: "PUT",
                mode: 'cors', cache: 'no-cache',
                credentials: 'same-origin', headers: { "Content-Type": "application/json" }
            })
        const data = await allRestaurant.json()
        console.log(data);
        
    }
    catch (err) {
        console.log(err);
    }
}