const getPokemon = async () => {
    try {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => {
            const data = JSON.stringify(response);
            return data;
        })
    } catch(err) {
        console.error('Error:', err);
    }
}

export { getPokemon };