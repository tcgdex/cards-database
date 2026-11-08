import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Tornadus-EX",
		'fr-fr': "Boréas-EX",
		'es-es': "Tornadus-EX",
		'it-it': "Tornadus-EX",
		'pt-br': "Tornadus-EX",
		'de-de': "Boreos-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		641,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blow Through",
				'fr-fr': "Grosse Bourrasque"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 30 more damage.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Blast",
				'fr-fr': "Violente Déflagration"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1
}

export default card
