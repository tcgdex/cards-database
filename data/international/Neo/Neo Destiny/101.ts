import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Magnifier",
		'fr-fr': "Loupe",
		'de-de': "Vergrößerungsglas"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach Magnifier to 1 of your Pokémon. At the end of your turn, discard Magnifier. If the Pokémon Magnifier is attached to attacks, don't apply Resistance for that attack.",
		'fr-fr': "Attachez Loupe à un de vos Pokémon. A la fin de votre tour, défaussez-vous de Loupe. Si le Pokémon auquel Loupe est attachée attaque, n'appliquez pas la Résistance pour cette attaque.",
		'de-de': "Attach Magnifier to 1 of your Pokémon. At he end of your turn, discard Magnifier. If the Pokémon Magnifier is attached to attcks, don't apply Resistance for this attack."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274753,
				tcgplayer: 87122
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274753,
				tcgplayer: 87122
			}
		}
	]
}

export default card
