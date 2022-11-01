// get  all Restaurants


// http://localhost:3000/restaurant
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

const getAllRestaurant = () => {
    let input = document.querySelector('.search')
    input.addEventListener('keydown', (e) => {
        const keyworld = e.target.value;
        if (keyworld != '' && e.key === "Enter") {
            fetch("http://localhost:3000/restaurant",
                {
                    method: "GET",
                    mode: 'cors', cache: 'no-cache',
                    credentials: 'same-origin', headers: { "Content-Type": "application/json" }
                })
                .then((response) => {
                    return response.json()
                }
                )
                .then((data) => {
                    let restaurants = data.filter((restaurant) =>
                        restaurant.name.includes(keyworld) || restaurant.type.includes(keyworld)
                    )
                    removeAll()
                    restaurants.forEach(element => {
                        addRestaurant(element)

                    });
                }
                )

                .catch(err => console.log(err))


        }

    })
}
function main() {
    getAllRestaurant()
}
main()