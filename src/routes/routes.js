const router= require ('express').Router ()



/* verbos HTTP, existe 4 tipos o GET- para obter dados, POST- enviar ou receber dados, 
put- atualizar dados e DELETE para remover dados */


const ProductController = require ('../controllers/products')

router.get('/products/:id?', ProductController.get )
router.post('/products', ProductController.post)
/*router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.delete)*/


module.exports = router