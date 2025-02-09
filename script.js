function generateLabel() {
    var gtin = document.getElementById('gtin').value;
    var sscc = document.getElementById('sscc').value;
    var quantity = document.getElementById('quantity').value;
    var batch = document.getElementById('batch').value;
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('div-round-shadow')
    const labelTable = document.createElement('table');
    labelTable.classList.add('label');

    if(gtin){
        gtin = `(02)${gtin}`
    }
    
    if(sscc){
        sscc = `(00)${sscc}`
    }

    if(quantity){
        quantity = `(37)${quantity}`
    }

    if(batch){
        batch = `(10)${batch}`
    }
    
    labelTable.innerHTML = `
        <tbody>
        <tr>
            <td><p colspan="2">GTIN</p><p>${gtin}</p></td>
            <td><p>QUANTITY</p><p>${quantity}</td>
        </tr>
        <tr>
            <td><p colspan="2">SSCC</p><p>${sscc}</p></td>
            <td><p>BATCH</p><p>${batch}</p></td>
        </tr>
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
