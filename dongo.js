class Color{
    constructor(r, g, b) {
        this.r = r; 
        this.g = g;
        this.b = b;


    }

    rgb = function () {
     return `rgb(${this.r}, ${this.g}, ${this.b})`;
   
}

  hex() {
      let hexR = this.r.toString(16).padStart(2, '0');
      let hexG = this.g.toString(16).padStart(2, '0');
      let hexB = this.b.toString(16).padStart(2, '0');
      return `#${hexR}${hexG}${hexB}`;
    }


rgba = function (a) {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
}


}
 let myColor = new Color(34, 193, 195);
console.log(myColor.rgb(), myColor.rgba(0.5))
document.body.style.backgroundColor = myColor.rgb();