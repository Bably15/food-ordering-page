import classes from "./Cart.module.css";
const Cart = (props) => {
    const cartItems = (
        <ul classes={classes["cart-items"]}>
            {[{ id: "b1", name: "pizza", amount: 3, price: 13.0 }].map(
                (item) => {
                    <li>{item.name}</li>;
                }
            )}
        </ul>
    );
    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>45.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}> close</button>
                <button className={classes.button}> order</button>
            </div>
        </div>
    );
};
export default Cart;
