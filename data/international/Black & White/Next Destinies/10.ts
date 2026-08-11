import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		58,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stoke",
				'fr-fr': "Attisement",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Firebreathing",
				'fr-fr': "Souffle-Feu",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "A Pokémon with a loyal nature, it will remain motionless until it is given an order by its Trainer.",
	},

	thirdParty: {
		cardmarket: 280235,
		tcgplayer: 85961
	}
}

export default card
