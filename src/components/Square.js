import React from 'react'


// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square"
//                     onClick={() => this.props.click()}
//             >
//                 {this.props.squareValue}
//             </button>
//         );
//     }
// }
//
// export default Square


export function Square(props) {
    return (
        <button className="square" onClick={props.click}>
            {props.squareValue}
        </button>
    );
}
