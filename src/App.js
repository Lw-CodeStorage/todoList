import React, { Children } from 'react';
import './App.css';

function ListItem({ listItem }) {
    return (<>
        <div > {`- ${listItem}`} </div>
    </>
    )
}

function App() {
    let [value, setValue] = React.useState("")
    let [list, setList] = React.useState([])

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(value);
        if (value) {
            setList([...list, value])
        }
    }

    let inputChangeHandle = (e) => {
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    let deleteClick = (deleteItemID) => () => {
        // console.log(deleteItemID)
        setList(
            list.filter((item, index) =>
                index != deleteItemID
            )
        )
    }
    let done = (doneID) => () => {

    }

    React.useEffect(() => {
        //console.log(list);
    }, [list])

    return (
        <>
            <form onSubmit={handleSubmit} >
                <
                    input type='text'
                    value={value}
                    onChange={inputChangeHandle}
                />
                <button type='submit'> add </button> </form >

            {
                list.map((item, index) =>
                    <div style={
                        {
                            width: 250,
                            display: "flex",
                            justifyContent: 'space-between'
                        }
                    }
                        key={index} >
                        <ListItem listItem={item} > </ListItem>
                        <div>
                            <span onClick={deleteClick(index)} > Delete </span>
                            <span onClick={done(index)} > Done </span>
                        </div>
                    </div>
                )
            }

        </>
    )

}

export default App;