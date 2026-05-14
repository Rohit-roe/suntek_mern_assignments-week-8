import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function ProductsList() {
  const { register, handleSubmit } = useForm();

  let [products, setProducts] = useState([])
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  let [filteredProductData, setFilteredProductData] = useState([]) //searched products data - could be either by title or by category
  const navigate = useNavigate()

  // navigate to product component
  const gotoProduct = (productObj) => {
    // navigation logic
    // while navigating, transfer the product object as well
    navigate('/product', { state: { product: productObj } })
  }

  useEffect(() => {
    setLoading(true)
    async function getProducts() {
      try {
        let res = await fetch('https://fakestoreapi.com/products')
        if (res.status === 200) {
          // extract the json data from the response
          let productsData = await res.json()
          // update the state
          setProducts(productsData)
          setFilteredProductData(productsData)
        }
        else {
          throw new Error('failed to fetch the products data')
        }
      } catch (err) {
        setError(err.message)
      }
      finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  if (loading === true) {
    return <p className='text-center text-2xl text-blue-300'>Loading.....</p>
  }
  if (error !== null) {
    return <p className='text-center text-2xl text-red-500'>Error: {error}</p>
  }

  // const searchProductByTitle = (formDataObj) => {
  //   // get the input field data
  //   let searchTerm = formDataObj.searchInput.toLowerCase();
  //   // if it is empty then set the products to display all the products
  //   if (searchTerm.trim() === '') {
  //     setFilteredProductData(products)
  //     return
  //   }
  //   // console.log(searchTerm)
  //   // filter by title
  //   let filtered = products.filter((productObj) => productObj.title.toLowerCase().includes(searchTerm))
  //   // set the filtered data
  //   setFilteredProductData(filtered)
  // }

  // const searchProductByCategory = (formDataObj) => {
  //   // get the input field data
  //   let searchTerm = formDataObj.searchInput.toLowerCase();
  //   // if it is empty then set the products to display all the products
  //   if (searchTerm.trim() === '') {
  //     setFilteredProductData(products)
  //     return
  //   }
  //   // filter by category
  //   let filtered = products.filter((productObj) => productObj.category.toLowerCase() === searchTerm)
  //   // set the filtered data
  //   setFilteredProductData(filtered)
  // }

  // combined function
  const searchProduct = (formDataObj) => {
    // get the input field data
    let searchTerm = formDataObj.searchInput.toLowerCase();
    // if it is empty then set the products to display all the products
    if (searchTerm.trim() === '') {
      setFilteredProductData(products)
      return
    }
    // filter by category
    let filtered = products.filter((productObj) =>
      productObj.title.toLowerCase().includes(searchTerm) ||
      productObj.category.toLowerCase() === searchTerm //includes() checks for substring match, not exact match. dont use it for category
    )
    // set the filtered data
    setFilteredProductData(filtered)
  }

  //sort by price
  const filterByPrice = (dropDown) => {
    // create a copy of the filteredProducts and do operations on that
    let copy = [...filteredProductData]
    // check the dropdown by the option id
    if (dropDown === 'low') {
      // ascending order lesser - larger
      copy.sort((a, b) => a.price - b.price) //sorts the array in place, returns either -neg,positive or zero
    }
    else if (dropDown === 'high') {
      // descending order larger - lesser
      copy.sort((a, b) => b.price - a.price)
    }
    setFilteredProductData(copy)
  }
  return (
    <div>
      {/* search by product category */}
      {/* search form field with a placeholder and a button */}
      {/* once the use clicks the button then implement a filter function to filter out by category and return the result */}
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(searchProduct)}
          className="flex gap-3 mt-10"
        >
          <input
            type="text"
            placeholder="enter the product category/title"
            {...register('searchInput')}
            className="border rounded px-3 py-2"
          />
          <button type="submit" className="border rounded bg-gray-300 px-4 py-2">Search 🔎</button>
          <select onChange={(e) => filterByPrice(e.target.value)} className="border rounded bg-gray-200 px-3 py-2">
            <option value="">Select</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </form>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10'>
        {/* products list */}
        {
          filteredProductData.length === 0 ? (
            <p className='text-red-500 text-center'>
              No product found!
            </p>
          ) : (
            filteredProductData.map((productObj) => (
              <div
                onClick={() => gotoProduct(productObj)}
                key={productObj.id}
                className='shadow-md rounded-3xl p-10 text-center cursor-pointer bg-gray-100'
              >
                <img
                  className="h-40 object-contain block mx-auto mb-10"
                  src={productObj.image}
                  alt={productObj.title}
                />
                <h2>{productObj.title}</h2>
                <p className='text-green-400'>${productObj.price}</p>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default ProductsList