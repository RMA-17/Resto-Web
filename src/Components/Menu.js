/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import ReactLoading from "react-loading";
import Aos from "aos";

const Menu = () => {
  const [meals, setMeal] = useState([]);

  const [foodModal, setFoodModal] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getFoodModal = (idMeal) => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setFoodModal(res.data.meals[0]);
      })
      .catch((res) => {
        console.error(res);
      });
  };

  const getMeal = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setMeal(res.data.meals);
      })
      .catch((res) => {
        console.error(res);
      });
  };

  useEffect(() => {
    Aos.init({
      once: false,
    });
    getMeal();
  }, []);

  console.log(meals);

  function truncateString(str, num) {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  }

  return (
    <section id="menu">
      <div className="bg-menu flex items-center flex-col p-32 max-lg:p-5">
        <div
          className="title -mb-10 max-lg:-mb-8 max-lg:text-6xl"
          data-aos="slide-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Discover
        </div>
        <div
          className="subtitle text-white z-10 max-lg:text-center max-lg:text-5xl"
          data-aos="slide-up"
          data-aos-duration="500"
          data-aos-once="true"
        >
          Our Menu
        </div>

        <div className="m-10 p-5 bg-transparent w-full h-full rounded-md flex flex-wrap gap-8 justify-center items-center max-lg:flex-col max-lg:m-5 max-lg:p-0">
          {meals?.slice(0, 6).map((meal) => (
            <>
              <div
                className="menu-card border w-1/4 h-auto rounded-lg bg-white border-white max-lg:w-full"
                data-aos="flip-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <img
                  className="object-cover rounded-t-lg"
                  src={meal.strMealThumb}
                  alt="Ini gambar menu"
                />
                <div className="py-4 px-2 flex flex-col">
                  <h2 className="text-xl font-semibold ">
                    {truncateString(meal.strMeal, 20)}
                  </h2>
                  <h2 className="text-xs mt-1">{meal.strArea}</h2>
                  <button
                    value={foodModal}
                    onClick={(e) => getFoodModal(meal.idMeal)}
                    className="uppercase ml-auto mt-5 text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px]
          before:bottom-0 before:left-0 before:bg-yellow-400
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
          before:transition before:ease-in-out before:duration-300 "
                    data-bs-toggle="modal"
                    data-bs-target="#modal-food"
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="modal-food"
                tabindex="-1"
                aria-labelledby="exampleModalXlLabel"
                aria-modal="true"
                role="dialog"
              >
                <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5
                        class="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalXlLabel"
                      >
                        {foodModal.strMeal} - {foodModal.strArea}
                      </h5>
                      <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body relative p-4">
                      {isLoading ? (
                        <div className="flex justify-center items-center">
                          <ReactLoading type="cylon" color="#ffa33e" />
                        </div>
                      ) : (
                        <>
                          <div className="flex max-lg:flex-col">
                            <div className="w-1/2 justify-center items-center flex max-lg:w-full">
                              <img
                                className="rounded-lg"
                                src={foodModal.strMealThumb}
                                alt={`Image ${foodModal.strMealThumb}`}
                              />
                            </div>
                            <div className="w-1/2 flex flex-col px-8 max-lg:w-full max-lg:px-0 max-lg:py-12">
                              <h1 className="text-2xl font-semibold max-lg:hidden">
                                {foodModal.strMeal} - {foodModal.strArea}
                              </h1>
                              <h2 className="text-base font-normal">
                                Category: {foodModal.strCategory} Dish
                              </h2>
                              <p className="py-10">
                                Instructions: {foodModal.strInstructions}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                      <button
                        type="button"
                        onClick={() => {
                          window.open(foodModal.strYoutube);
                        }}
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1 uppercase"
                      >
                        See Instructions in YouTube
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
