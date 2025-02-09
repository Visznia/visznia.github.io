function generateLabel() {
    const gtin = document.getElementById('gtin').value;
    const sscc = document.getElementById('sscc').value;
    const quantity = document.getElementById('quantity').value;
    const labelDiv = document.createElement('table');
    labelDiv.classList.add('label');
    
    labelDiv.innerHTML = `
        <tbody>
        <tr>
            <td><p>GTIN<p>${gtin}</p></td>
            <td><p>SSCC<p>${sscc}</p></td>
            <td>test;</td>
        </tr>
        <tr>
            <td colspan="3"><p class="barcode">${sscc}${gtin}</p><p class="barcode-text">${sscc}${gtin}</p></td>
        </tr>
        <tr>
            <td colspan="3" class="barcode">test</td>
        </tr>
        <tr>
            <td colspan="3" class="barcode">test</td>
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
