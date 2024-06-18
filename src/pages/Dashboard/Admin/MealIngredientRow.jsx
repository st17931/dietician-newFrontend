import { useState } from "react";

const MealIngredientRow = ({ ingredient, updateIngredientsData, ingredientArrIndex, firstDataObject, secondDataObject, thirdDataObject, fourthIndexNumber, deleteIngredientData}) => {
    

    const [ingredientState, setIngredientState] = useState(ingredient);
    const [showSaveButton, setShowSaveButton] = useState(false);
    console.log("ingredientState in the MealIngredientrow", ingredientState);

    function handleOnChange(e){
        setShowSaveButton(true);
        setIngredientState({...ingredientState, [e.target.name]: Number(e.target.value)});
    }

    function handleSaveChanges(){
        updateIngredientsData(firstDataObject, secondDataObject, thirdDataObject, fourthIndexNumber, ingredientArrIndex, ingredientState);
        console.log("Inside handlesave changes")
        setShowSaveButton(false);
    }

    function handleDelete(){
        deleteIngredientData(firstDataObject, secondDataObject, thirdDataObject, fourthIndexNumber, ingredientArrIndex);
    }

    return (
        <tr className="bg-white border-b hover:bg-gray-50  ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                <input
                    value={ingredientState.item || ""}
                    className="outline-none p-1 w-auto"
                    type="text" name="ingredient_name" id=""
                    placeholder="Enter Ingredients name"
                    onChange={handleOnChange}
                />
            </th>
            <td className="px-6 py-4">
                <input
                    value={ingredientState.protein || 0}
                    className="outline-none p-1 w-full"
                    type="number" name="protein" id=""
                    placeholder="protein content"
                    onChange={handleOnChange}
                />
            </td>
            <td className="px-6 py-4">
                <input
                    value={ingredientState.fat || 0}
                    className="outline-none p-1 w-full"
                    type="number" name="fat" id=""
                    placeholder="fat content"
                    onChange={handleOnChange}
                />
            </td>
            <td className="px-6 py-4">
                <input
                    value={ingredientState.carbs || 0}
                    className="outline-none p-1 w-full"
                    type="number" name="carbs" id=""
                    placeholder="carbs content"
                    onChange={handleOnChange}
                />
            </td>
            <td className="px-6 py-4">
                <input
                    value={ingredientState.calories || 0}
                    className="outline-none p-1 w-full"
                    type="number" name="calories" id=""
                    placeholder="calories content"
                    onChange={handleOnChange}
                />
            </td>
            <td className="px-6 py-4 text-right">
                {showSaveButton && <button 
                className="font-medium text-blue-600 hover:underline"
                onClick={handleSaveChanges}
                >
                    <i className="ai ai-note-pencil mx-1"></i>
                </button>}
                <button 
                className="font-medium text-rose-500 hover:underline"
                onClick={handleDelete}
                >
                    <i className="ai ai-trash-fill mx-1"></i>
                </button>
            </td>
        </tr>
    )
}


export default MealIngredientRow;