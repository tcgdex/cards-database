import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Basculin",
		fr: "Bargantua",
		es: "Basculin",
		it: "Basculin",
		pt: "Basculin",
		de: "Barschuft"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		550,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on this Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Final Gambit",
				fr: "Tout ou Rien",
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this Pokémon does 80 damage to itself.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, ce Pokémon s'inflige 80 dégâts.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279989
	}
}

export default card
