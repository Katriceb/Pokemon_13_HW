const React = require("react");
class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1> Edit the pokemon</h1>
                <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.pokemon.name} /><br />
                    
                    {this.props.pokeman.ChooseAPhoto? <input type="checkbox" name="Choose a Photo" defaultChecked /> : <input type="checkbox" name="Choose A Photo" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </div>

        )
    }
}
module.exports = Edit;