import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { vendors } from "../data/Data";
import Slider from "react-slick";


const Vendor = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <Slider {...settings}>
              {vendors.map((vendor, key) => (
                <div className="bg-light p-4" key={key}>
                  <img src={vendor.image} alt={`Vendor ${key + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vendor
