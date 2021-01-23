import React, { Component } from 'react';
import data2 from '../data2.json';

class Postcheckbox extends Component {
    render() {
        return (
            <div>
                {data2.map((CheckDetail, index) => {
                    return <form Align='left'>
                        <p>2. {CheckDetail.soal}</p>
                        <input type='checkbox' name='Check' checked />{CheckDetail.option = "Trainer Juara Coding"}
                        <br />
                        <input type='checkbox' name='Check' checked />{CheckDetail.option = "Manusia"}
                        <br />
                        <input type='checkbox' name='check' />{CheckDetail.option = "Anggota Avenger"}
                    </form>
                })}
            </div>
        );
    }
}

export default Postcheckbox;