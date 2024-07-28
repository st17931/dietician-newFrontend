/* eslint-disable react/prop-types */
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

function Step3({ handleChange }) {
  const [formData, setFormData] = useState({
    dietType: "",
    bodyType: "",
    bodyFatPercentage: "",
    healthIssues: "",
    medicines: "",
  });

  console.log("form data in the step3 where dietType is present in the formData", formData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    handleChange(e); // Pass the event up to the parent component
  };

  return (
    <Slide>
      <div className=" min-w-fit rounded-lg bg-slate-200/50 px-10 py-10 backdrop-blur-sm">
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Body Type
        </h2>
        <div className="mt-8 sm:w-[500px]">
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-1.5">
              <select
                onChange={handleInputChange}
                name="dietType"
                value={formData.dietType}
                className="h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Choose Diet Type</option>
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-vegetarian</option>
                <option value="veg">Vegan</option>
                <option value="eggs">
                  Vegetarian but eat eggs
                </option>
              </select>
            </div>

            <div className="w-full p-1.5 sm:w-1/2">
              <select
                onChange={handleInputChange}
                name="bodyType"
                value={formData.bodyType}
                className="h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Select body type</option>
                <option value="Ectomorph">Ectomorph</option>
                <option value="Endomorph">Endomorph</option>
                <option value="Mesomorph">Mesomorph</option>
              </select>
            </div>
            <div className="w-full p-1.5 sm:w-1/2">
              <input
                className="h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                type="text"
                placeholder="Body Fat Percentage"
                name="bodyFatPercentage"
                value={formData.bodyFatPercentage}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full p-1.5 sm:w-1/2">
              {/* <input
                className="h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                type="text"
                placeholder="Do you have any health issues?"
                name="healthIssues"
                value={formData.healthIssues}
                onChange={handleInputChange}
              /> */}

              <select
                onChange={handleInputChange}
                name="healthIssues"
                value={formData.healthIssues}
                className="select-hide h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Do you have any health issues?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="w-full p-1.5 sm:w-1/2">
              {/* <input
                className="h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                type="text"
                placeholder="Taking any medicines"
                name="medicines"
                value={formData.medicines}
                onChange={handleInputChange}
              /> */}

              <select
                onChange={handleInputChange}
                name="medicines"
                value={formData.medicines}
                className="select-hide h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              >
                <option value="" selected disabled hidden>Taking any medicines?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Step3;
