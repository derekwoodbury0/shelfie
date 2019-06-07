module.exports = {
    readAll: (req, res) => {
        let db = req.app.get('db')
        db.get_inventory().then(response => res.status(200).send(response))
    },
    createProduct: (req, res) => {
        let db = req.app.get('db')
        let newProduct = req.body
        db.create_product(newProduct)
        .then(response => res.status(200).send(response))
    }
}