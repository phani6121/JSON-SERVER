module.exports = () => {
    const data = {
        products: [],
    };

    for (let i = 0; i < 1000; i++) {
        data.products.push({
            id: i + 1,
            title: `product${i + 1}`,
        });
    }

    return data;
};

const getData = (api) => {
    fetch(`https://fakestoreapi.com/${api}`)
        .then(res => res.json())
        .then(json => {
            return json
        })
}

getData("products")