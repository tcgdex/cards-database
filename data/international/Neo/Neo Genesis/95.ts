import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "New Pokédex",
		'fr-fr': "Nouveau Pokédex",
		'de-de': "Neuer Pokedex"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Shuffle your deck. Then, look at up to 5 cards from the top of your deck and rearrange them as you like.",
		'fr-fr': "Mélangez votre deck. Ensuite, regardez jusqu'à 5 cartes du dessus de votre deck et ordonnez-les comme bon vous semble.",
		'de-de': "Shuffle your deck. Then, look at up to 5 cards from the top of your deck and rearrange them as you like."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274495
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274495
			}
		}
	]
}

export default card
