const data = [
    {
        title: 'sample',
        image: "https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg",
        desc: "HEAVYWEIGHT HOODIE BLACK"
    },
    {
        title: 'sample',
        image: "https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg",
        desc: "HEAVYWEIGHT HOODIE BLACK"
    },
    {
        title: 'sample',
        image: "https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg",
        desc: "HEAVYWEIGHT HOODIE BLACK"
    },
    {
        title: 'sample',
        image: "https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg",
        desc: "HEAVYWEIGHT HOODIE BLACK"
    },
    {
        title: 'sample',
        image: "https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg",
        desc: "HEAVYWEIGHT HOODIE BLACK"
    },
    {
        title: 'sample',
        image: "https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg",
        desc: "HEAVYWEIGHT HOODIE BLACK"
    },
    {
        title: 'sample',
        image: "https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg",
        desc: "HEAVYWEIGHT HOODIE BLACK"
    },
    {
        title: 'sample',
        image: "https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg",
        desc: "HEAVYWEIGHT HOODIE BLACK"
    },
]

const row = document.getElementById('product-container');

data.map(item => {
    const col = document.createElement('div');
    col.classList.add('col-lg-3', 'col-sm-12');
    col.innerHTML = `
    <div class="card">
                <img src= ${item.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
  `;
  row.appendChild(col)
})
