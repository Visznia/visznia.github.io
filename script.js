function generateLabel() {
    var companyname = document.getElementById('company').value;
    var gtin = document.getElementById('gtin').value;
    var name = document.getElementById('name').value;
    var sscc = document.getElementById('sscc').value;
    var quantity = document.getElementById('quantity').value;
    var batch = document.getElementById('batch').value;
    var date = document.getElementById('bestBefore').value;
    var serial = document.getElementById('serial').value;
    var info = document.getElementById('info').value;
    var order = document.getElementById('order').value;

    console.log(`DATA: ${date}`)

    const labelDiv = document.createElement('div');
    const labelTable = document.createElement('table');
    labelTable.classList.add('label');
    labelTable.id = "capture";

    var tableText = `<tbody>`;

    if(companyname){
        tableText += `
        <tr>
            <td class="company-name" colspan="3"><p>${companyname}</p></td>
        </tr>
        `;
    }

    if(name){
        tableText += `
        <tr>
            <td colspan="3"><p>${name}</p>
        </tr>
        `
    }

    tableText += `<tr>`;

    if(quantity){
        quantity = `(37)${quantity}`;
        tableText += `    <td><p>QUANTITY</p><p>${quantity}</td>`;
    }

    if(gtin){
        gtin = `(02)${gtin}`;
        tableText += `    <td colspan="2"><p>GTIN</p><p>${gtin}</p></td>`;
    }

    tableText += `</tr>`;
    tableText += `<tr>`;

    if(batch){
        batch = `(10)${batch}`;
        tableText += `    <td><p>BATCH</p><p>${batch}</p></td>`;
    }

    if(sscc){
        sscc = `(00)${sscc}`;
        tableText += `    <td colspan="2"><p>SSCC</p><p>${sscc}</p></td>`;
    }

    tableText += `</tr>`;
    tableText += `<tr>;`;

    if(date){
        date = `(15)${date}`
        tableText +=`<td><p>BEST BEFORE</p><p>${date}</p></td>`
    }

    if(order){
        order = `(400)${order}`
        tableText +=`<td><p>ORDER</p><p>${order}</p></td>`
    }
    if(info){
        info = `(91)${info}`
        tableText +=`<td><p>info</p><p>${info}</p></td>`
    }

    tableText += `</tr>`;
    
    tableText += `
            
        <tr>
            <td class="barcode-cell" colspan="3"><p class="barcode">${gtin}</p><p class="barcode-text">${gtin}</p></td>
        </tr>
        <tr>
            <td class="barcode-cell" colspan="3"><p class="barcode">${quantity}${batch}</p><p class="barcode-text">${quantity}${batch}</p></td>
        </tr>
        <tr>
            <td class="barcode-cell" colspan="3"><p class="barcode">${sscc}</p><p class="barcode-text">${sscc}</p></td>
        </tr>
        </tbody>
    `;

    labelTable.innerHTML = tableText;

    console.log(labelTable.innerHTML)
    
    labelDiv.appendChild(labelTable);
    document.getElementById('labels').appendChild(labelDiv);
}

function toogleShowSingle(){
    const singleGenerator = document.getElementById('single-generator');
    const multiGenerator = document.getElementById('multi-generator');
    if(singleGenerator.style.display == "none"){
        console.log('pokazuje')
        singleGenerator.style.display = "flex";
        multiGenerator.style.display = "none";
    }
    else{
        console.log('ukrywam')
        singleGenerator.style.display = "none";
        multiGenerator.style.display = "flex";
    }
    
}

function toogleShowMulti(){
    const multiGenerator = document.getElementById('multi-generator');
    if(multiGenerator.style.display == "none"){
        console.log('pokazuje')
        multiGenerator.style.display = "flex";
        singleGenerator.style.display = "none";
    }
    else{
        console.log('ukrywam')
        multiGenerator.style.display = "none";
        singleGenerator.style.display = "flex";

    }
    
}

const singleGenerator = document.getElementById('single-generator');
singleGenerator.style.display = "none";
const multiGenerator = document.getElementById('multi-generator');
multiGenerator.style.display = "none";
document.getElementById("download").addEventListener("click", function () {
    html2canvas(document.getElementById("capture")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "capture.png";
        link.click();
    });
});
