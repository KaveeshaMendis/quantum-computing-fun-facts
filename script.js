const funFacts = [
    "Superposition: Quantum bits, or qubits, can exist in multiple states at once, unlike classical bits which are either 0 or 1.",
    "Entanglement: Entangled qubits remain connected so that the state of one can instantly affect the state of another, no matter the distance between them.",
    "Quantum Speedup: Quantum computers can solve certain problems much faster than classical computers by leveraging quantum parallelism.",
    "Quantum Supremacy: Quantum computers can perform a calculation that is infeasible for classical computers.",
    "Quantum Tunneling: Quantum tunneling allows particles to pass through barriers, a phenomenon that is harnessed in quantum computing for certain operations.",
    "Shor's Algorithm: Shor's algorithm can factor large numbers exponentially faster than the best-known classical algorithms, posing a threat to current encryption methods.",
    "Quantum Decoherence: Quantum decoherence is the loss of quantum behavior, which occurs when a quantum system interacts with its environment."
];

function showRandomFact() {
    const factElement = document.getElementById('fact');
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    
    factElement.classList.remove('fade-in');
    void factElement.offsetWidth; // Trigger reflow to restart animation
    factElement.innerText = randomFact;
    factElement.classList.add('fade-in');
}

document.querySelector('button').addEventListener('click', showRandomFact);
