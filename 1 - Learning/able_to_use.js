
class Store {
    
}

/*      Insert New Product Formula      */
class ProductInStore {
    productID = 0
    productName = ''
    productPrice = 0
    weight = {// interesting problem: some products will have different weight types
        productWeight: 0,
        weightType: ''
        /* grams: 0,
        kg: 0,
        lb: 0 */
    }

    getProductInfo = () => {
        console.log(`${this.productName} is $${this.productPrice} and has a weight of ${this.weight.productWeight} ${this.weight.weightType}`)
    }

    constructor(productData) {
        const {productName, productPrice, weight, weightType} = productData
        //this.productID = last product id + 1? could be the barcode, not sure yet
        this.productName = productName
        this.productPrice = productPrice
        this.weight.productWeight = weight
        this.weight.weightType = weightType
        }
        persist(database) {
            database.save(() =>
                ({
                    productName: this.productName,
                    price: this.productPrice
                })
            )
        }
}

class ProductDatabase {
    items = []

    save(getDataCallBack) {
        const data = getDataCallBack()
        this.items.push(data)
    }
}

const db = new ProductDatabase()

const product1 = new ProductInStore({productName: 'chicken strips', productPrice: 10, weight: 1.2, weightType: 'kg'})
product1.getProductInfo()

product1.persist(db)

console.log(db.items)

items.forEach(product => console.log(product.productName))

//items.forEach(product => console.log(product.productName))
// maybe a way to display all items? idk yet
const userSearchInput = 'chicken strips'

/* const filteredItem = items.filter(function(product) {
    return product.productName === `${userSearchInput}`
}) */

const filteredItem = items.filter(product => product.productName === `${userSearchInput}`)

/*      Product Formulas      */

//      Weight Formulas
// const convertLBtoG = (weight) => weight *
const convertKGToG = weight => weight * 1000

//      Price Formulas
const priceToGram = (price, gram) => price / gram

function GetPricePerGram(product) {
    if (product.weight.weightType === 'kg')
        gramWeight = convertKGToG(product.weight.productWeight)
    else
    gramWeight = product.weight.productWeight
    const pricePerGram = priceToGram(product.productPrice, gramWeight)
    return pricePerGram
}

console.log(GetPricePerGram(product1))

class Users {

}

class ProductDatabase {
    items = []

    save(getDataCallBack) {
        const data = getDataCallBack()
        this.items.push(data)
    }
}