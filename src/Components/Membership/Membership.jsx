import banner4 from "../../assets/images/banner4.jpg";

const Membership = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 p-4 lg:p-0">
      <div className="min-h-96 relative rounded-xl overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${banner4})` }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 "></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-5xl font-bold font-playfair mb-2">MemberShip</h2>
          <p className="text-white text-lg font-work text-center">
            Unlock full access to Bookspedia and see the entire library of
            subscribers only content & updates
          </p>
          <p className="mt-6 text-white text-lg uppercase font-work font-semibold">Select Your Favourite Plan</p>
          <label className="flex items-center cursor-pointer gap-2">
            <span className="label-text text-white text-2xl">Monthly</span>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <span className="label-text text-white text-2xl">Yearly</span>
          </label>
        </div>
      </div>
      <div className="max-w-6xl mx-0 lg:mx-auto  p-4 lg:p-0 lg:absolute lg:-mt-14 lg:ml-16 lg:mr-16 flex  flex-col lg:flex-row gap-4">
        <div className="lg:w-1/3 bg-[#2ECE63] text-center p-4 rounded-2xl lg:mb-14">
          <h2 className="text-white text-2xl font-playfair font-semibold mb-8">FREE</h2>
          <p className="text-white text-6xl font-playfair font-bold mb-8">
            <sup className="font-normal">$</sup>0
          </p>
          <p className="text-white text-lg font-work font-bold mb-4">
            Sign up now for free,to be notified of new content and support
            BooksPedia,help keep this site independent.
          </p>
          <p className="text-white text-base font-work font-normal">Full access to posts for subscribers</p>
          <p className="text-white text-base font-work font-normal mb-6">Weekly email newsletter</p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn rounded-full text-lg"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Purchase Now
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Congratulations!!!</h3>
              <p className="text-lg font-playfair font-semibold">
                Welcome to <span>BooksPedia...</span>
              </p>
              <p className="py-4 text-blue-400 text-xl">
                You have successfully sign up to our comunity 
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="lg:w-1/3 bg-[#ED9250] text-center p-4 rounded-2xl lg:mb-14">
          <h2 className="text-white text-2xl font-playfair font-semibold mb-8">Premium</h2>
          <p className="text-white text-6xl font-playfair font-bold mb-8">
            <sup className="font-normal">$</sup>79<sub className="text-2xl">/y</sub>
          </p>
          <p className="text-white text-lg font-work font-bold mb-4">
            Get access to the library of paid-members.Paid members can download books for read and get three books for free.
          </p>
          <p className="text-white text-base font-work font-normal">Full access to posts for subscribers</p>
          <p className="text-white text-base font-work font-normal mb-6">Weekly email newsletter</p>
          <button
            className="btn rounded-full text-lg"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Purchase Now
          </button>
          <dialog
            id="my_modal_2"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Congratulations!!!</h3>
              <p className="text-lg font-playfair font-semibold">
                Welcome to <span>BooksPedia...</span>
              </p>
              <p className="py-4 text-blue-400 text-xl">
                You have successfully purchase Premium package
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="lg:w-1/3 bg-[#CC43FF] text-center p-4 rounded-2xl lg:mb-14">
          <h2 className="text-white text-2xl font-playfair font-semibold mb-8">Premium Plus</h2>
          <p className="text-white text-6xl font-playfair font-bold mb-8">
            <sup className="font-normal">$</sup>149<sub className="text-2xl">/y</sub>
          </p>
          <p className="text-white text-lg font-work font-bold mb-4">
            Purchase this yearly package and get access to everything. Paid members can download books and also publish their books here.
          </p>
          <p className="text-white text-base font-work font-normal">Full access to posts for subscribers</p>
          <p className="text-white text-base font-work font-normal mb-6">Weekly email newsletter</p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn rounded-full text-lg"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Purchase Now
          </button>
          <dialog
            id="my_modal_3"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Congratulations!!!</h3>
              <p className="text-lg font-playfair font-semibold">
                Welcome to <span>BooksPedia...</span>
              </p>
              <p className="py-4 text-blue-400 text-xl">
                You have successfully purchase Premium Plus package
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Membership;
