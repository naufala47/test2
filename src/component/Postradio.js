import React, { Component } from 'react';
import data from '../data.json';

class Postradio extends Component {
    render() {
        return (
            <div>
                {data.map((RadioDetail, index) => {
                    return <form Align='left'>
                        <p>1. {RadioDetail.soal}</p>
                        <input type='radio' name='radio' checked />{RadioDetail.a}
                        <input type='radio' name='radio' />{RadioDetail.c}
                        <br />
                        <input type='radio' name='radio' />{RadioDetail.b}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='radio' name='radio' />{RadioDetail.d}
                    </form>
                })}

            </div>
        );
    }
}

export default Postradio;