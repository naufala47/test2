import React, { Component } from 'react';
import data3 from '../data3.json'
class Posttxtarea extends Component {
    render() {
        return (
            <div>
                {data3.map((TxtDetail, index) => {
                    return <form Align='left'>
                        <p>3. {TxtDetail.soal}</p>
                            &nbsp;&nbsp;&nbsp;<textarea name="" id="" cols="45" rows="5" value={TxtDetail.type}></textarea>
                    </form>
                })}
            </div>
        );
    }
}
export default Posttxtarea;