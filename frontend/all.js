async function init() {
    console.log("init");
    try {
        const allRestaurant = await fetch("http://localhost:3000/restaurant",
            {
                method: "GET",
                mode: 'cors', cache: 'no-cache',
                credentials: 'same-origin', headers: { "Content-Type": "application/json" }
            })
        const allData = await allRestaurant.json()
        allData.forEach(element => {
            // console.log(element);
            addRestaurant(element)
        });
        // console.log(allData);
    }
    catch (err) {
        console.log(err);
    }

}
const addRestaurant = (data) => {

    const item = document.createElement("div")
    item.className = "card"
    item.style = 'max-width:20rem'
    const card = `<img class="card-img-top" src="${data.ImageURL}" alt="restaurant">
    <div class="card-body">
        <h5 class="card-title>${data.name}</h5>
        <p class="card-text">${data.type}</p>
        <a href="" class="btn btn-danger" onclick="deleteRestaurant(${data.id})" >Delete</a>
        <a href="" class="btn btn-warning col-xs-2">
        Edit
    </a>
    </div>
    `
    item.innerHTML = card
    const restaurantEle = document.querySelector(".restaurants")
    restaurantEle.appendChild(item)
}
const removeAll = () => {
    const restaurantEle = document.querySelector(".restaurants")
    restaurantEle.innerHTML = ''
}
const deleteRestaurant = async (id) => {
    console.log(id);
    if (id) {
        const restaurant = await fetch(`http://localhost:3000/restaurant/delete/${id}/`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((Response) => Response.json())
            .then(() => {
                alert(`Restaurant ID: ${id} is deleted`);
                location.reload();
            });
    } else {
        alert("Restaurant ID is missing")
    }

}