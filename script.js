const products = [
  { name: "Product A", price: 100 },
  { name: "Product B", price: 200 },
  { name: "Product C", price: 300 },
  { name: "Product D", price: 400 },
];

function displayProducts(list) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = '<p>No products found</p>';
    return;
  }
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<strong>${p.name}</strong><br>Price: ₹${p.price}`;
    container.appendChild(div);
  });
}

function applyFilter() {
  const min = parseInt(document.getElementById('min-price').value) || 0;
  const max = parseInt(document.getElementById('max-price').value) || Infinity;

  const filtered = products.filter(p => p.price >= min && p.price <= max);
  displayProducts(filtered);
}

function clearFilter() {
  document.getElementById('min-price').value = '';
  document.getElementById('max-price').value = '';
  displayProducts(products);
}

window.onload = () => displayProducts(products);
