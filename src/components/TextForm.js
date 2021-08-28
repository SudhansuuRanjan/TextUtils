import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
      //console.log("Uppercase was clicked"+ text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = () => {
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
      }
    const handleClrText= () => {
        //console.log("Uppercase was clicked"+ text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!","warning");
      }
    const handleCapText= () => {
        //console.log("Uppercase was clicked"+ text);
        let newText =  text.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
          }).join(' ');
        setText(newText);
        props.showAlert("Converted to titlecase!","success");
  }
    const handleRevText= () => {
        //console.log("Uppercase was clicked"+ text);
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text reversed!","success");
      }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
      }

      const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!","success");
        }

        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed!","success");
            }
               

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <>
        <div className="container"  style={{color:props.mode=== 'light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleRevText}>Reverse Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCapText}>Title Case Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-success mx-3 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger my-1" onClick={handleClrText}>Clear Text</button>

        </div>
        <div className="container my-4" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p> <b>{text.split(" ").length}</b> words , <b>{text.length}</b> characters , <b>{text.split(".").length-1}</b> sentences.</p>
            <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here..."}</p>
        </div>
        </>
    )
}
