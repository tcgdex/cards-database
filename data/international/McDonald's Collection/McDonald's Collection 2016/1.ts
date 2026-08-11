import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "kirisAki",
	category: "Pokemon",

	dexId: [37],

	description: {
		'en-us': "While young, it has six gorgeous tails. When it grows, several new tails are sprouted."
	},

	hp: 60,
	types: ["Fire"],

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Roar",
			'fr-fr': "Hurlement"
		},

		effect: {
			'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			'fr-fr': "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc."
		}
	}, {
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge"
		},

		damage: 10
	}],

	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295137,
				tcgplayer: 275057
			}
		}
	]
}

export default card

