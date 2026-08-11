import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Tumble",
				'fr-fr': "Roulade Continue"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A kindly Pokémon that lays highly nutritious eggs and shares them with injured Pokémon or people.",
	},

	thirdParty: {
		cardmarket: 280408,
		tcgplayer: 84179
	}
}

export default card
