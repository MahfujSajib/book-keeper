const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const file = document.querySelector("#myfile");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (author.value == '' && title.value == '' && year.value == '' && file.value == '') {
        alert('give all value')
    }

    else {
        const newRow = document.createElement('tr');

        // create title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        //   create author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        //  create year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        // create file
        const newFile = document.createElement('th');
        newFile.innerHTML = file.value;
        newRow.appendChild(newFile);
        //  display in UI
        bookList.appendChild(newRow);

    }


})