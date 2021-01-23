import React, { Component } from 'react';
import Postradio from '../component/Postradio';
import Postcheckbox from '../component/Postcheckbox';
import Posttxtarea from '../component/Posttxtarea';

class Soal extends Component {

    render() {
        return (
            <div>
                <Postradio />
                <Postcheckbox />
                <Posttxtarea />


            </div>
        )

    }

}

export default Soal;