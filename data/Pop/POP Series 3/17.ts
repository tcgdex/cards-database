import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Ho-Oh ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 110,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Golden Wing",
			},
			effect: {
				en: "If Ho-Oh ex would be Knocked Out by damage from an opponent's attack, you may move up to 2 Energy attached to Ho-Oh ex to your Pokémon in any way you like.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Burn",
			},
			effect: {
				en: "Does 10 damage plus 20 more damage for each type of basic Energy card attached to Ho-Oh ex.",
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





}

export default card
