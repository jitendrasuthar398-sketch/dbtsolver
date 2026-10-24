function postDoubt() {
    const input = document.getElementById('doubtInput');
    const text = input.value.trim();
    
    if (text === "") {
        alert("Please type a doubt before posting!");
        return;
    }
    
    const container = document.getElementById('doubtsContainer');
    
    const doubtCard = document.createElement('div');
    doubtCard.className = 'card';
    doubtCard.innerHTML = `
        <span class="badge">GENERAL</span>
        <p class="question">${text}</p>
        <div class="answers">
            <p class="text-muted">No answers yet. Be the first to help!</p>
        </div>
    `;
    
    container.insertBefore(doubtCard, container.firstChild);
    input.value = "";
}
