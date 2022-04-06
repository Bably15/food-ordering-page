import { Fragment } from "react";

import Banner from "./Banner";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <Fragment>
            <Banner />
            <AvailableMeals />
        </Fragment>
    );
};

export default Meals;
