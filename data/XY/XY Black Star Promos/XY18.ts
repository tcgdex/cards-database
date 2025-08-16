import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Chesnaught EX",
		fr: "Blindépique EX",
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		652,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "40×",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281311
	}
}

export default card
