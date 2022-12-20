//<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1/dist/chart.umd.min.js"></script> // js delevery put it on the head tag 


    
chart();
async function chart() { 
const data = await getdata();
const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
type: 'line',
data: {
labels: data.xlabels,
datasets: [{
  label: 'Combined Land-Surface Air and Sea-Surface Water Temperature ic °C ',
  data: data.ytemps,
  fill:false,
  backgroundColor: [
  'rgba(255, 99, 132, 0.2)'],
  borderColor: [
  'rgba(255, 99, 132, 1)'],
  borderWidth: 1.2
}
]
},
options: {
    scales: {
        y: {
            ticks: { 
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    return value + '°';
                }
            }
        }
    }
}

});


async function getdata () {
    const xlabels = [];
    const ytemps = [];
    const response =   await  fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    const table = data.split('\n').slice(1, -1);
    table.forEach(row => {
        const columns = row.split(',')
        const year = columns[0];
        xlabels.push(year);
        const temp = columns[1];
        ytemps.push(parseFloat(temp) + 14)
        console.log(year,temp);
    });
    return {xlabels,ytemps};
    }
    }

        
 //    window.setInterval('darkMode()',10000);

const btn = document.getElementById("btn");
const body = document.getElementById("body");
body.style.setProperty("backgroundColor","black")

btn.onmouseenter = function () {
 body.style.setProperty("backgroundColor","black")}

        




    // making a map and tiles

