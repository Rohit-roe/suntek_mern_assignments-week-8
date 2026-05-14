import { useLocation } from "react-router"

function Product() {
  const {state}=useLocation()
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-10">
      <div className="w-2/5">
      <img src={state?.product?.image} className="w-96 m-auto" alt="" />
      </div>
      <div className="w-3/5 p-15 ">
      <p className="text-3xl mb-10 text-center underline"> {state?.product?.title}</p>
      <p className="mb-10"> {state?.product?.description}</p>
      <p className="mb-10 text-3xl"> {state?.product?.price}</p>
      <p className="mb-10 text-3xl"> {state?.product?.category}</p>
      </div>
    </div>
  )
}

export default Product