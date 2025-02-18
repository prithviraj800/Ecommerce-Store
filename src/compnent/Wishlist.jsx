import { Link } from "react-router-dom";
export default function Wishlist() {
  return (
    <div className="px-5">
      <div className="border-[0.02rem] border-black flex justify-between py-2 sm:px-5 px-2 md:text-xl sm:text-lg text-sm items-center font-semibold">
        <p>Wishlist (10 items)</p>
        <button className="bg-gray-500 p-1 rounded-md hover:bg-gray-300">
          CONTINUE SHOPPING
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-5 py-10">
      <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/new-arrival/01.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/01.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/trending-product/01.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/02.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/new-arrival/02.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/05.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/special-offer/03.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/new-arrival/05.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/trending-product/04.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/special-offer/04.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
      </div>
    </div>
  );
}
