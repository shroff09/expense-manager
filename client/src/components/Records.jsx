import React,{useState} from 'react';
import './style.css';
const Records = () => {
     
    const [lists,setlist] = useState([]);
    const [text,settext] = useState('');
    const [amount,setamount] = useState([]);
     
    const addtransaction = () => {
        setlist([...lists,{
            index:lists.length+1,
            tranc:text,
            amt:amount
        }]);
    };
   
    const clickhandler = () =>{
           addtransaction();
            Sumincome();
            settext('');
            setamount([]);
    }
    const Sumincome = () => {
          let sum = lists.reduce((a,b)=> a += parseInt(b.amt),0);
           console.log(sum);
  return <p>income:{sum}</p>;
      };
  
      

    return (
        <div className="main">
            <div className="left">
            <div  className="total">
             <Sumincome amount={lists.amt}/>  
            </div>
           <div className="inputs">
           <input type="text" value={text} onChange={(e)=> settext(e.target.value)}/>
           <br/> <input type="text" value={amount} onChange={(e)=> setamount(e.target.value)}/>
           </div>
           <button onClick={clickhandler} >add</button>
            </div>
           
           <div className="list">
               <h2>Transaction</h2>
            <ul>
            { lists.map((list) => (<li key={list.index}>
               <h3 id="item">{list.tranc}</h3> 
                <h3 id="amount">{list.amt}</h3>
                <button id="remove" onClick={ ()=> setlist(lists.filter((item)=>item.index !== list.index))} >Remove</button>
            </li>))} 
             </ul>
            </div>
           
        </div>
    );
};

export default Records;