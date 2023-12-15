const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemons } = this.props;
        // const pokemons = this.props

        return (
            <div>
                <h1>See All The Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Create a Pokemon</a>
                </nav>
        <ul>
            {pokemons.map((pokemon, i) => {
                return (
                    <li>
                        {pokemon.name}
                    </li>
                )
            })}
        </ul>
        </div>

        )
    }
}

module.exports = Index;