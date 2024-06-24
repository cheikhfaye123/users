const listaUsuarios = document.getElementById("listaUsuarios");

const tenerUsuarios = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            mostrarUsuarios(data); 
        })
        .catch(error => console.error('Error:', error)); 
};

const mostrarUsuarios = (usuarios) => {
    usuarios.forEach((usuario, index) => {
        const imgSrc = `assets/img/${index}.jpeg`;
        const { name, username, phone, company, email, address: { street, city, suite } } = usuario;
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${imgSrc}" alt="${name}">
            <div class="detailUser">
                <p><strong>Name :</strong> ${name}</p>
                <p><strong>Username :</strong> ${username}</p>
                <p><strong>Phone :</strong> ${phone}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Street :</strong> ${street}</p>
                <p><strong>City :</strong> ${city}</p>
                <p><strong>Suite :</strong> ${suite}</p>
                <p><strong>Company :</strong> ${company.name}</p>
            </div>
        `;
        listaUsuarios.appendChild(li); // Ensure listaUsuarios is a valid DOM element
    });
};

tenerUsuarios();
