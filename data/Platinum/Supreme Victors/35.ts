import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Milotic C",
		fr: "Milobellus ",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 90,
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
				en: "Aqua Tail",
				fr: "Hydroqueue",
			},
			effect: {
				en: "Flip a coin for each Water Energy attached to Milotic C. This attack does 10 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Water attachée à Milobellus . Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
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
				en: "Wrap",
				fr: "Ligotage",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
