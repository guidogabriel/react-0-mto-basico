function FirstComponent() {
    const handleClick = () => {
        console.log('clicou botao')
    }

    return(
        <div className="firstcomponent">
            <p>Primeiro componente</p>
            <button onClick={handleClick}> Evenmto de Click</button>
        </div>
    );
}

export default FirstComponent;