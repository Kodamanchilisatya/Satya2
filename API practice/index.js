function fetchData() {
    const xhr = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/users";

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            // Display JSON response
            document.getElementById("jsonDisplay").textContent = JSON.stringify(data, null, 4);

            // Populate table
            const tableBody = document.querySelector("#dataTable tbody");
            tableBody.innerHTML = "";

            data.forEach(user => {
                const row = `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        }
    };

    xhr.send();
}
