import { useState } from "react";


export default function MealName({name, firstDataObject, secondDataObject, thirdDataObject, fourthIndexNumber, updateMealName}){
    console.log("Meal Name component rendered")
    const [editMealName, setEditMealName] = useState(false);
    const [mealName, setMealName] = useState(name);


    function handleSave(){
        updateMealName(firstDataObject, secondDataObject, thirdDataObject, fourthIndexNumber, mealName);
        setEditMealName(false);
    }

    return(
        <>
        {!editMealName && <h6
            className="mb-4 text-lg text-emerald-600 dark:text-slate-300"
            onClick={() => setEditMealName(true)}
        >
            {mealName}
        </h6>
        }

        {
            editMealName && <><input
                placeholder={name}
                onChange={(e)=> setMealName(e.target.value)}
            />
                <button
                    className="bg-green-600 text-white rounded p-0.5 px-2 m-2"
                    onClick={handleSave}
                >
                    Save
                </button></>
        }
        </>
    )
}