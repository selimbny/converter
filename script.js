new Vue({
    el: '#databinding',
    il: 'myDiv',
    data: {
      name:'',
      currencyfrom : [
        {name:"USD", desc:"US Dollar"},
        {name:"EUR", desc:"Euro"},
        {name:"CAD", desc:"Canadian Dollar"},
        {name:"PLN", desc:"Zloty"}
        ],
      convertfrom: "CAD",
     
      amount :"",
      CAD : [
        {"name" :"USD", "rate":0.71},
        {"name":"EUR", "rate":0.65},
        {"name":"CAD", "rate":1},
        {"name":"PLN", "rate":3}
        ],
      
      USD : [
        {"name" :"USD", "rate":1},
        {"name":"EUR", "rate":0.91},
        {"name":"CAD", "rate":1.39},
        {"name":"PLN", "rate":4.15}
        ],

      EUR : [
        {"name" :"USD", "rate":1.1},
        {"name":"EUR", "rate":1},
        {"name":"CAD", "rate":1.52},
        {"name":"PLN", "rate":4.5}
        ],

      PLN : [
        {"name" :"USD", "rate":0.24},
        {"name":"EUR", "rate":0.22},
        {"name":"CAD", "rate":0.34},
        {"name":"PLN", "rate":1}
        ]
      
    },
    computed :{
      test1:function() {
        var from = this.convertfrom;
        var final;
       
        var myCAD = this.CAD;
        var myUSD = this.USD;
        var myEUR = this.EUR;
        var myPLN = this.PLN;


        var x;

        switch(from) {
          case "CAD":
            var i;
            for (i = 0; i < myCAD.length; i++) {
              x += "<h2>" + this.amount + "  CAD  equals to " + this.amount*myCAD[i].rate + " " + myCAD[i].name + "</h2>";
            }
            document.getElementById("myDiv").innerHTML = x;
            
            
            break;


          case "USD":
            var i;
            for (i = 0; i < myUSD.length; i++) {
              x += "<h2>" + this.amount + "  USD  equals to " + this.amount*myUSD[i].rate + " " + myUSD[i].name + "</h2>";
            }
            document.getElementById("myDiv").innerHTML = x;

            break;


          case "EUR":
            var i;
            for (i = 0; i < myEUR.length; i++) {
              x += "<h2>" + this.amount + "  EUR  equals to " + this.amount*myEUR[i].rate + " " + myEUR[i].name + "</h2>";
            }
            document.getElementById("myDiv").innerHTML = x;

            break;


          case "PLN":
            var i;
            for (i = 0; i < myPLN.length; i++) {
              x += "<h2>" + this.amount + "  PLN  equals to " + this.amount*myPLN[i].rate + " " + myPLN[i].name + "</h2>";
            }
            document.getElementById("myDiv").innerHTML = x;

            break


        }        

        
      },

      addEur:function(){

        var newRate =document.getElementById("ra").value;
        var newCurrency =document.getElementById("cu").value;
        this.EUR.name.Push(newCurrency);
        this.EUR.name.Push(newRate);

        var i;
        for (i = 0; i < myEUR.length; i++) {
          x += "<h2>" + myEUR[i].name + "</h2>";
        }
        document.getElementById("add").innerHTML = x;

      }
    }
  });