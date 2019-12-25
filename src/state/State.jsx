import React, {Component} from 'react';

class Kursus extends Component{
    constructor(props){
        super(props);
        this.state={
            paket:"kursus Programming",
            materi:"React js",
            desc: "belajar react js",
            harga: 2000000
        };
        
    }
    render(){
        return(
            <div>
                <h1> Nama Paket       :{this.state.paket}</h1>
                <h1> Jenis Materi     :{this.state.materi}</h1>
                <h1> Deskripsi Paket  :{this.state.desc}</h1>
                <h1> Harga Paket      :{this.state.harga}</h1>
            </div>
        )
    }
}

export default Kursus;