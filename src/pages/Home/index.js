import React,{useState} from 'react';
import '../../global.css';
import './styles.css'

export default function Home(){
    const [local1,setLocal1]=useState([])
    const [local2,setLocal2]=useState([])
    const [local3,setLocal3]=useState([])
    const [local4,setLocal4]=useState([])
    const [insere,setInserir] = useState("")
    const [remove,setRemover] = useState("")
    const [locais, setLocais] = useState([]) //insere a quantidade em cada local
    const [result,setResult]=useState('')

    function contLocais(){
        locais.push(local1.length)
        locais.push(local2.length)
        locais.push(local3.length)
        locais.push(local4.length)
    }

    function inserir(e){
        e.preventDefault()
        contLocais()
        console.log(locais)
        local1.push(insere)
        setLocais([])
        setResult('inserido '+ insere)
        alert(local1)

    }

    function remover(e){
        e.preventDefault()
        local1.pop()

    }
    
    return(
        <div className="geral">
            <h1>Prova</h1>
            <form onSubmit={inserir}>
                <h3>Digite o código para inserir o container</h3>
                <input
                    placeholder="Inserir"
                    value={insere}
                    onChange={e=> setInserir(e.target.value)}
                />
                <button type="submit">Inserir</button>
            </form>
            <form onSubmit={remover}>
                <h3>Remover container</h3>
                <input
                    placeholder="Remover"
                    value={remove}
                    onChange={e=> setRemover(e.target.value)}
                />
                <button type="submit">Remover</button>
            </form>
            <h2> {result} </h2>
            <br/>
            <h3>
                Local 1 : (base) {local1.toString} (topo) <br/>
                Local 2 : (base) {local2.toString} (topo) <br/>
                Local 3 : (base) {local3.toString} (topo) <br/>
                Local 4 : (base) {local4.toString} (topo) <br/>
            </h3>
        </div>
    );
}