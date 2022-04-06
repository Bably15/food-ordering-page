import React from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import MealItem from "./components/Meals/MealItem";

function App() {
    return (
        <div>
            <Header />
            <Meal />
            <MealItem />
        </div>
    );
}

export default App;
