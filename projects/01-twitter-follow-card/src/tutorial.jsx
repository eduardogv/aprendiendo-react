const inputs = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]




function ProductCategoryRow({ category }){
    return (
        <tr>
            <th colSpan="2">{category}</th>
        </tr>
    )
}

function ProductRow(){
    const name = product.stocked ? product.name:
        <span style={{color:'red'}}> //esto es CSS
            {product.name}
        </span>
    return (
        <tr>
            <td>(name)</td>
            <td>{product.price}</td>
        </tr>
    )
}
function ProductTable(){
    const rows = []
    let lastCategory = null
    product
}

export function Tutorial() {
    return (
        <>
            <h1>Hello</h1>
        </>
        
    )
  }
  