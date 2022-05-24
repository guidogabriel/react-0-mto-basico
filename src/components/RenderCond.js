const RenderCond = ({x, y}) => {
    

    return (
        <div>
            Renderização condicional: {x > 5 && <p>X é maior que 10</p>}
            <p>{y}</p>
        </div>

    );

}

export default RenderCond