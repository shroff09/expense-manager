import { red } from '@material-ui/core/colors';
import React, { useState, useEffect } from 'react';
 
import './style.css';
const Records = () => {

    const [lists, setlist] = useState([]);
    const [text, settext] = useState('');
    const [amount, setamount] = useState([]);

    const addtransaction = () => {
        setlist([...lists, {
            index: lists.length + 1,
            tranc: text,
            amt: amount
        }]);
    };
    //action
    useEffect( () =>{
        fetch(`http://localhost:3001/api/v1/expense`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({title:'post data'})
        })
        .then(response => response.json())
        .then(data => setlist(data.lists))
    })

    
    //const color  = (lists.amt >= 0) ? "green" : "red";

    const clickhandler = () => {
        addtransaction();
        Sumincome();
        Income();
        Expense();
        settext('');
        setamount([]);
    }

    const Sumincome = () => {
        let sum = lists.reduce((a, b) => a += parseInt(b.amt), 0);
        // console.log(sum);
        return <p>Your Balance <br />${sum}.00</p>;
    };

    const Income = () => {
        let positivesum = lists.map(x => +x.amt).filter(x => x > 0)
            .reduce((a, x) => a += x, 0);
        console.log(`as${positivesum}`);
        return <p>INCOME:{positivesum}</p>
    }

    const Expense = () => {
        let negtivesum = lists.map(x => +x.amt).filter(x => x < 0)
            .reduce((a, x) => a += x, 0);
        console.log(`neg${negtivesum}`);
        return <p>EXPENSE:{-1 * negtivesum}</p>
    }

    return (
        <div className="main">
            
            <div className="left">
                <div className="total">
                    <Sumincome amount={lists.amt} />
                </div>
                <br />
                <div className="InEx">
                    <span className="income"> <Income income={lists.amt} /></span>
                    <div className="vertical"></div>
                    <span className="expense"> <Expense expense={lists.amt} /></span>
                </div>
                <div className="inputs">
                    <span className="addtranc">Add new transaction</span><br /><hr /> 
                    <label>Text</label><br />
                    <input type="text" value={text} onChange={(e) => settext(e.target.value)} />
                    <br />
                    <label>Amount</label><br />
                    <input type="text" value={amount} onChange={(e) =>{const re = /^[+-]?[0-9]*$/ ;if(e.target.value==='' || re.test(e.target.value)){setamount(e.target.value)}}} />

                </div>
                <button className="addbtn" onClick={clickhandler} >add</button>
            </div>

            <div className="list">
                <h2>History</h2>
                <hr />
                <ul>

                    {lists.map((list) => (<li style={{borderRight:`10px solid ${(list.amt>=0)?"green":"red"}`}} key={list.index}>
                  

                        <h3 id="item">{list.tranc}</h3>
                        <h3  id="amount">{list.amt}</h3>
                  
                        <button id="remove" onClick={() => setlist(lists.filter((item) => item.index !== list.index))} >X</button>


                    </li>))}
                </ul>
            </div>

        </div>
    );
};

export default Records;
