window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
if (!window.indexedDB) {
    window.alert("Su explorador no soporta una version estable de IndexedDB. Esta caracteristica no esta disponible.");
}
/*
var db;
console.log("openDb ...");
var request = indexedDB.open("fiinanceDB");
request.onerror = function (event) {
    console.error("openDb FAIL:", evt.target.errorCode);
};
request.onsuccess = function (event) {
    db = request.result;
    console.log("openDb DONE");
};
db.onerror = function (event) {
    console.error("openDb:", evt.target.errorCode);
};
request.onupgradeneeded = function (event) {
    console.log("openDb.onupgradeneeded");
    var db = event.target.result;
    var tstore = db.createObjectStore("transaction", { keyPath: 'id', autoIncrement: true });
    tstore.createIndex("amount", "amount", { unique: false });
};

function tStore(mode) {
    var tx = db.transaction(["transaction"], mode);
    return tx.objectStore("transaction");
}

function addTransaction(value, description) {
    console.log("addTransaction arguments:", arguments);
    var obj = { amount: value, desc: description };
    var store = tStore('readwrite');
    var req;
    try {
        req = store.add(obj);
    } catch (e) {
        console.error('addTransaction error', e);
    }

    req.onsuccess = function (evt) {
        console.log("Insertion in DB successful");
    };
    req.onerror = function () {
        console.error("addTransaction error", this.error);
    };
}

function getBalance() {
    var balance = 0;
    console.log("getBalance... ");
    var objectStore = db.transaction("transaction").objectStore("transaction");
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            balance += cursor.key;
            cursor.continue();
        }
    };

    return balance;
}*/

var balance = 0;

function onAddClick() {
    balance = document.getElementById('value').value;
    window.location = 
}

function monthName(monthIndex) {
    return monthNames[monthIndex];
}

function currentMonth() {
    return new Date().getMonth();
}

function updateBalance() {
    document.getElementById('balance').innerHTML = 0;
}

function load() {
    document.getElementById('month').innerHTML = monthName(currentMonth());
    updateBalance();
}