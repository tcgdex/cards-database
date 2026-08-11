import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'es-es': "Foongus",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'de-de': "Tarnpignon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		590,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Find a Friend",
				'fr-fr': "Trouver un Ami",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Rising Lunge",
				'fr-fr': "Botte Secrète",
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
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lures people in with its Poké Ball pattern, then releases poison spores. Why it resembles a Poké Ball is unknown.",
	},

	thirdParty: {
		cardmarket: 280233,
		tcgplayer: 85538
	}
}

export default card
