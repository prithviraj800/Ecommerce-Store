import { Link } from "react-router-dom";

export default function Footerpage() {
  return (
    <div>
      <div className="bg-gray-500 px-8 md:text-md">
        <div className="bg-gray-400 py-10 rounded-tl-full rounded-br-full ">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 sm:gap-5 gap-2">
            <div>
              <p className="text-xl font-semibold py-5 ">SHOPINGGO</p>
              <p className="text-xl font-semibold  py-2">About Us</p>
              <p className="sm:text-sm text-sm">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold py-5 ">Explore</p>
              <div className="flex flex-col ">
                <Link>Fashion</Link>
                <Link>Woman</Link>
                <Link>Furniture</Link>
                <Link>Shoes</Link>
                <Link>Topwear</Link>
                <Link>Brands</Link>
                <Link>Kids</Link>
              </div>
            </div>

            <div>
              <p className="text-xl font-semibold py-5">Company</p>

              <div className="flex flex-col ">
                <Link>About Us</Link>
                <Link>Contact Us</Link>
                <Link>FAQ</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
                <Link>Complaints</Link>
              </div>
            </div>

            <div>
              <p className="text-xl font-semibold py-5">Follow Us</p>
              <div className="flex gap-2">
                <div className="w-10 h-10  rounded-full">
                  <img
                    className="rounded-full"
                    src="https://static.vecteezy.com/system/resources/previews/031/737/184/non_2x/facebook-icons-facebook-social-media-logo-free-png.png"
                    alt=""
                  />
                </div>
                <div className="w-10 h-10 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://static.vecteezy.com/system/resources/previews/018/930/473/original/instagram-logo-instagram-icon-transparent-free-png.png"
                    alt=""
                  />
                </div>
                <div className="w-10 h-10 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://img.freepik.com/premium-photo/twitter-logo-icon-illustration-vector_895118-5862.jpg"
                    alt=""
                  />
                </div>
                <div className="w-10 h-10  rounded-full">
                  <img
                    className="rounded-full"
                    src="https://icon-library.com/images/twitter-icon-png-transparent/twitter-icon-png-transparent-13.jpg"
                    alt=""
                  />
                </div>
                <div className="w-10 h-10  rounded-full">
                  <img
                    className="rounded-full"
                    src="https://static.vecteezy.com/system/resources/previews/018/930/569/original/youtube-logo-youtube-icon-transparent-free-png.png"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-xl font-semibold  pt-5">Support</p>
              {/* <p className="text-gray-500">support@example.com</p> */}
              <p className="text-xl font-semibold pt-5">Toll Free</p>
              <p>8000-09999-111</p>
            </div>
          </div>
          {/* <p className="text-center text-2xl font-bold py-5">
            Download Mobile App
          </p> */}
          {/* <div className="flex flex-col items-center border-b-2 border-black py-5 ">
            <div className="flex gap-5">
              <img
                className="w-[14rem]"
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/play-store.webp"
                alt=""
              />
              <img
                className="w-[14rem]"
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/apple-store.webp"
                alt=""
              />
            </div>
          </div> */}
          <div className="text-center py-3">
            <p>© 2022. www.example.com | All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
