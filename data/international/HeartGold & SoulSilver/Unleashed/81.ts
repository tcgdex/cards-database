import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Pokémon Circulator",
		'fr-fr': "Circulateur de Pokémon",
		'de-de': "Pokémon-Kreislauf"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un des Pokémon de son Banc.",
		'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
		'de-de': "Der Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279237,
				tcgplayer: 88216
			}
		},
	],
}

export default card
