// Sample data to simulate a database
const items = [
    { id: 1, name: 'Seed A', description: 'Description for Seed A' },
    { id: 2, name: 'Seed B', description: 'Description for Seed B' },
    { id: 3, name: 'Seed C', description: 'Description for Seed C' },
    { id: 4, name: 'Seed D', description: 'Description for Seed D' }
];

function searchItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchInput) || 
        item.description.toLowerCase().includes(searchInput)
    );
    displayItems(filteredItems);
}

function displayItems(items) {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = ''; // Clear previous results

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.description}`;
        itemsList.appendChild(li);
    });
}

// Display all items by default
displayItems(items);
