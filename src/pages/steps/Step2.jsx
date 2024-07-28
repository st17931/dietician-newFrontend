import { useState } from "react";
import { Slide } from "react-awesome-reveal";

function Step2({ handleChange }) {
  const [formData, setFormData] = useState({
    alcoholConsumption: "",
    smoking: "",
    dailyBreakfast: "",
    dailyLunch: "",
    dailySnacks: "",
    dailyDinner: "",
    occupation: "",
    workHours: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    handleChange(e); // Pass the event up to the parent component
  };

  return (
    <Slide>
      <div className=" min-w-fit rounded-lg bg-slate-200/50 px-10 py-10 backdrop-blur-sm">
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Your Habits
        </h2>
        <div className="mt-8 sm:w-[500px]">
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-1.5 sm:w-1/2">

              <select
                onChange={handleInputChange}
                name="alcoholConsumption"
                value={formData.alcohol}
                className="select-hide h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Do you consume alcohol?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

            </div>
            <div className="w-full p-1.5 sm:w-1/2">

              <select
                onChange={handleInputChange}
                name="smoking"
                value={formData.smoke}
                className="select-hide h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Do you smoke?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

            </div>

            <div className="w-full p-1.5 sm:w-1/2">

              <select
                onChange={handleInputChange}
                name="dailyBreakfast"
                value={formData.breakfast}
                className="select-hide h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Daily Breakfast?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>



            </div>
            <div className="w-full p-1.5 sm:w-1/2">
             

              <select
                onChange={handleInputChange}
                name="dailyLunch"
                value={formData.lunch}
                className="select-hide h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Daily Lunch?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

            </div>
            <div className="w-full p-1.5 sm:w-1/2">
              

              <select
                onChange={handleInputChange}
                name="dailySnacks"
                value={formData.snacks}
                className="select-hide h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Daily Snacks?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>



            </div>
            <div className="w-full p-1.5 sm:w-1/2">
    

              <select
                onChange={handleInputChange}
                name="dailyDinner"
                value={formData.dinner}
                className="select-hide h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Daily Dinner?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>


            </div>

            <div className="w-full p-1.5 sm:w-1/2">
              <input
                className="h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                type="text"
                placeholder="Your Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full p-1.5 sm:w-1/2">
              <input
                className="h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                type="text"
                placeholder="Your Work Hours"
                name="workHours"
                value={formData.workHours}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Step2;
