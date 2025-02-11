function generateLabel() {
    var companyname = document.getElementById('company').value;
    var gtin = document.getElementById('gtin').value;
    var sscc = document.getElementById('sscc').value;
    var quantity = document.getElementById('quantity').value;
    var batch = document.getElementById('batch').value;
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('div-round-shadow-centered');
    const labelTable = document.createElement('table');
    labelTable.classList.add('label');
    labelTable.id = "capture";

    var tableText = `<tbody>`;

    if(companyname){
        tableText = tableText + `
        <tr>
            <td class="company-name" colspan="3"><p>${companyname}</p></td>
        </tr>
        `;
    }

    tableText = tableText + `<tr>`;

    if(gtin){
        gtin = `(02)${gtin}`;
        tableText = tableText + `    <td colspan="2"><p>GTIN</p><p>${gtin}</p></td>`;
    }

    if(quantity){
        quantity = `(37)${quantity}`;
        tableText = tableText + `    <td><p>QUANTITY</p><p>${quantity}</td>`;
    }

    tableText = tableText + `</tr>`;
    tableText = tableText + `<tr>`;
    
    if(sscc){
        sscc = `(00)${sscc}`;
        tableText = tableText + `    <td colspan="2"><p>SSCC</p><p>${sscc}</p></td>`;
    }

    if(batch){
        batch = `(10)${batch}`;
        tableText = tableText + `    <td><p>BATCH</p><p>${batch}</p></td>`;
    }

    tableText = tableText + `</tr>`;

    
    tableText = tableText + `
            
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
        singleGenerator.style.display = "contents";
        multiGenerator.style.display = "none";
    }
    else{
        console.log('ukrywam')
        singleGenerator.style.display = "none";
        multiGenerator.style.display = "contents";
    }
    
}

function toogleShowMulti(){
    const multiGenerator = document.getElementById('multi-generator');
    if(multiGenerator.style.display == "none"){
        console.log('pokazuje')
        multiGenerator.style.display = "contents";
        singleGenerator.style.display = "none";
    }
    else{
        console.log('ukrywam')
        multiGenerator.style.display = "none";
        singleGenerator.style.display = "contents";

    }
    
}

const singleGenerator = document.getElementById('single-generator');
singleGenerator.style.display = "none";
const multiGenerator = document.getElementById('multi-generator');
multiGenerator.style.display = "none";
/* document.getElementById("download").addEventListener("click", function () {
    html2canvas(document.getElementById("capture")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "capture.png";
        link.click();
    });
}); */
