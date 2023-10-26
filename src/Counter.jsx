const Counter = ({count , handleDecrement , handleIncrement}) => {
    return (
        <>
        <h1>WEKCOME TO MY COUNT APP</h1>
        <h2>{count}</h2>
        <button onClick={handleIncrement}></button>
        <button onClick={handleDecrement}></button> </>
    );
}

export default Counter;