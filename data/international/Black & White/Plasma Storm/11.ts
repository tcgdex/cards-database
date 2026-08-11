import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Maractus",
		'fr-fr': "Maracachi",
		'es-es': "Maractus",
		'it-it': "Maractus",
		'pt-br': "Maractus",
		'de-de': "Maracamba"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		556,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Dazzle Dance",
				'fr-fr': "Danse Éblouissante",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 20,

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
		'en-us': "When it moves rhythmically, it makes a sound similar to maracas, making the surprised Pokémon flee.",
	},

	thirdParty: {
		cardmarket: 280751,
		tcgplayer: 87191
	}
}

export default card
