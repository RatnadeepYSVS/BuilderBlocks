const comm = document.querySelector('#search')
const commm = document.querySelector('.backo')
comm.addEventListener('keyup', (e) => {
    const val = e.target.value.toLowerCase()
    const books = commm.querySelectorAll('.pic')
    Array.from(books).forEach(function(book) {
        const title = book.textContent;
        if (title.toLowerCase().indexOf(val) != -1) {
            book.style.display = 'block'
        } else {
            book.style.display = 'none'
        }
    })
})