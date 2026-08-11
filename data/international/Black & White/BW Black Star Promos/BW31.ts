import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Victory Cup",
		'fr-fr': "Coupe Victoire",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Trainer",

	set: Set,











	effect: {
		'en-us': "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).",
		'fr-fr': "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
	},
	trainerType: "Item",

}

export default card
