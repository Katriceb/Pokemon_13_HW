const React = require('react');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        // const pokemon = this.props

       console.log(pokemon)
       console.log(this.props)
        return (
            <div>
                <h1>"Gotta Catch 'Em All"</h1>
                <nav>
                    <a href="/pokemon/new">Create a New Pokemon</a>
                </nav>
                <ul>
                    {pokemon && pokemon.map((pokemon, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/pokemon/${pokemon._id}`}>
                                    {pokemon.name}
                                </a> {' '}
                                <img src={pokemon.img}/> <br></br>
                                
                            <br />
                            <a href={`/pokemon/${pokemon._id}/edit`}> Edit This pokemon </a>
                            <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;