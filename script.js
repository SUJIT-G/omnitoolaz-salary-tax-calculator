document.getElementById('calculateBtn').addEventListener('click', function() {
  const country = document.getElementById('country').value;
  const salary = parseFloat(document.getElementById('salary').value);
  const breakdownDiv = document.getElementById('breakdown');

  if (!salary || salary <= 0) {
    alert("Please enter a valid salary.");
    return;
  }

  let tax = 0;
  let netSalary = 0;
  let details = '';

  if (country === 'india') {
    // India FY 2025-26 example (Old Regime)
    if (salary <= 250000) tax = 0;
    else if (salary <= 500000) tax = (salary - 250000) * 0.05;
    else if (salary <= 1000000) tax = 12500 + (salary - 500000) * 0.20;
    else tax = 112500 + (salary - 1000000) * 0.30;
    netSalary = salary - tax;
    details = `
      <p><strong>Gross Salary:</strong> ₹${salary.toLocaleString()}</p>
      <p><strong>Income Tax:</strong> ₹${tax.toLocaleString()}</p>
      <p><strong>Take-Home Salary:</strong> ₹${netSalary.toLocaleString()}</p>
    `;
  } else if (country === 'us') {
    // US Federal example (Single filer 2025)
    if (salary <= 11000) tax = salary * 0.10;
    else if (salary <= 44725) tax = 1100 + (salary - 11000) * 0.12;
    else if (salary <= 95375) tax = 5147 + (salary - 44725) * 0.22;
    else tax = 16290 + (salary - 95375) * 0.24;
    netSalary = salary - tax;
    details = `
      <p><strong>Gross Salary:</strong> $${salary.toLocaleString()}</p>
      <p><strong>Federal Tax:</strong> $${tax.toLocaleString()}</p>
      <p><strong>Take-Home Salary:</strong> $${netSalary.toLocaleString()}</p>
    `;
  } else if (country === 'uk') {
    // UK example 2025-26 (England)
    if (salary <= 12570) tax = 0;
    else if (salary <= 50270) tax = (salary - 12570) * 0.20;
    else if (salary <= 150000) tax = 7540 + (salary - 50270) * 0.40;
    else tax = 54030 + (salary - 150000) * 0.45;
    netSalary = salary - tax;
    details = `
      <p><strong>Gross Salary:</strong> £${salary.toLocaleString()}</p>
      <p><strong>Income Tax:</strong> £${tax.toLocaleString()}</p>
      <p><strong>Take-Home Salary:</strong> £${netSalary.toLocaleString()}</p>
    `;
  }

  breakdownDiv.innerHTML = details;
  document.getElementById('results').style.display = 'block';
});
