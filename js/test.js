(function ($) {
    const ctx = document.getElementById("canvas").getContext('2d');
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(0,255,0,0.3)'
                
                },
                {
                    label: 'test',
                    data: [10,2,20,5,10,2],
                    backgroundColor: 'rgba(255,0,0,0.3)'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            }
        }
    });

    $(() => {
        $('#pdf').on('click',()=>{
            var canvasImg = document.getElementById("canvas").toDataURL("image/png", 1.0);
            var doc = new jsPDF('l','mm','a4');
            doc.setFontSize(33);
            doc.setFillColor(135, 124,45,0);
            doc.addImage(canvasImg, 'png', 10, 10, 200, 120);
            doc.save('sample.pdf');
        });
    });
    

}(jQuery));