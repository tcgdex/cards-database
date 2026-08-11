import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Tornadus-EX",
		fr: "Boréas-EX",
		es: "Tornadus-EX",
		it: "Tornadus-EX",
		pt: "Tornadus-EX",
		de: "Boreos-EX"
	},

	illustrator: "Shizurow",
	rarity: "Rare",
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
				en: "Blow Through",
				fr: "Grosse Bourrasque"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 more damage.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires."
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
				en: "Power Blast",
				fr: "Violente Déflagration"
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon."
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
