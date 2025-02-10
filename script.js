function generateLabel() {
    var companyname = document.getElementById('company').value;
    var gtin = document.getElementById('gtin').value;
    var sscc = document.getElementById('sscc').value;
    var quantity = document.getElementById('quantity').value;
    var batch = document.getElementById('batch').value;
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('div-round-shadow');
    const labelTable = document.createElement('table');
    labelTable.classList.add('label');

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

function exportPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 10;
    
    document.querySelectorAll('.label').forEach(label => {
        doc.text(label.innerText, 10, y);
        y += 20;
    });
    
    doc.save("etykiety.pdf");
}
