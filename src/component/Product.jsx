import React, {useState, useMemo, useRef} from 'react';

const Product = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    // tranh lap lai logic ko can thiet
    // chi tinh toan khi products thay doi
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price
        }, 0)

        return result
    }, [products])

    return (
        <div style={{paddingLeft: '20px'}}>
            <h1>useMemo</h1>
            <input 
                ref={nameRef}
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            <br />
            <input 
                type="text"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total:{total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Product;