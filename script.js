function generateLabel() {
    var gtin = document.getElementById('gtin').value;
    var sscc = document.getElementById('sscc').value;
    var quantity = document.getElementById('quantity').value;
    const labelDiv = document.createElement('table');
    labelDiv.classList.add('label');

    if(gtin){
        gtin = `(02)${gtin}`
    }
    
    if(sscc){
        sscc = `(00)${sscc}`
    }

    if(quantity){
        quantity = `(37)${quantity}`
    }
    
    labelDiv.innerHTML = `
        <tbody>
        <tr>
            <td><p>GTIN<p>${gtin}</p></td>
            <td><p>SSCC<p>${sscc}</p></td>
            <td><p>QUANTITY<p>${quantity}</td>
        </tr>
        <tr>
            <td colspan="3"><p class="barcode">${gtin}</p><p class="barcode-text">${gtin}</p></td>
        </tr>
        <tr>
            <td colspan="3"><p class="barcode">${quantity}</p><p class="barcode-text">${quantity}</p></td>
        </tr>
        <tr>
            <td colspan="3"><p class="barcode">${sscc}</p><p class="barcode-text">${sscc}</p></td>
        </tr>
        </tbody>
    `;
    
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
