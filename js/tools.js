window.SWMTools={saveJSON:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),loadJSON:(k,d)=>{try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(d))}catch{return d}}};
