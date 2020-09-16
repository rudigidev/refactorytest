function Swap (bil,a,b) {
    let x = bil[a];
     bil[a] = bil[b];
     bil[b] = x;
}
let bilangan = [4,9,7,5,8,9,3];// 12,35,12,45,56,56,35,23,12,01
let a = bilangan;
Swap(a,1,2); 
console.log(a);
let b = a;
Swap(b,3,5);
console.log(b);
let c = b;
Swap(b,1,2);
console.log(c);
let d = c;
Swap(d,4,5);
console.log(d);
let e = d;
Swap(e,5,6);
console.log(e);
let f = e;
Swap(f,5,6);
console.log(f);
let g = f;
Swap(g,3,5);
console.log(g);
let h = g;
Swap(h,2,3);
console.log(h);
let i = h;
Swap(g,1,2);
console.log(i);
let j = i;
Swap(h,0,1);
console.log(j);
