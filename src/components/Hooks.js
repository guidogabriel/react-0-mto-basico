import { useState } from "react";

const Hooks = () => {
    const [novaIdade, setNovaIdade] = useState(30);

    const changeAge = () =>{
        setNovaIdade(31);
        console.log(novaIdade)
    }

    return(
        <div>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeAge}>Mudar idade</button>
        </div>
    )
}

export default Hooks