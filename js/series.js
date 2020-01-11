// series-1
var ser = "";
var n;
for (var i = 1; i < 10; i++) {
    n = i*2;
    ser = ser+n+" "
}
console.log('series-1: ',ser);


// series-2
var ser = "";
var n= 1;
for (var i = 1; i < 10; i++) {
    n = n+3;
    ser = ser+n+" "
}
console.log('series-2: ',ser);

// series-3
var ser = "";
for (var i = 1; i < 10; i++) {
    n = i*i-1;
    ser = ser+n+" "
}
console.log('series-3: ',ser);

// series-4
var ser = "";
for (var i = 1; i < 10; i++) {
    n = i;
    if (i%2 == 0) {
        n=i*2;
    }
    ser = ser+n+" "
}
console.log('series-4: ',ser);



// series-5
var ser = "";
for (var i = 1; i < 10; i++) {
    n = i;
    if (i%2 == 0) {
        n=i*2;
    }
    ser = ser+n+" "
}
console.log('series-4: ',ser);


// series-5
var ser = "0 1 ";
n = 0;
x = 0;
y = 1;
for (var i = 1; i < 10; i++) {
    n = x+y;
    x = y;
    y = n;
    ser = ser+n+" "
    
}
console.log('series-5: ',ser);