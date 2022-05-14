const getAllCrew = async () => {
    const response = await fetch('http://localhost:3000')
    const data = await response.json();
    return data;

}

const renderCrew = async () => {
    const data = await getAllCrew();
    const crew = document.querySelector('.member-list');
    data.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-item');
        memberCard.innerHTML = member.firstname;
        crew.appendChild(memberCard);
    })
}

renderCrew();

const addCrewHTML = (firstname) => {
    const crew = document.querySelector('.member-list');
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-item');
    memberCard.innerHTML = firstname;
    crew.appendChild(memberCard);
}


// Ajouter un équipage
const addCrew = async () => {
    const buttonElement = document.querySelector('#submitButton');

    buttonElement.addEventListener('click', async () => {
        const firstname = document.querySelector('#firstname').value;
        if (firstname !== '') {
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: firstname
                })
            });
            const data = await response.json();
            addCrewHTML(data.firstname);
        }
    })
}

addCrew();