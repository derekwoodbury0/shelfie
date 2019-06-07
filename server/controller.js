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
    },
    deleteProduct: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.delete_product(id).then(response => res.status(200).send(response))
    },
    updateProduct: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        let updatedProduct = req.body
        updatedProduct.id = id

        db.update_product(updatedProduct).then(response => res.status(200).send(response))
    },
    readOne: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.get_one(id).then(response => res.status(500).send(response))
    }
}