import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		113,
	],
	hp: 90,
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
				en: "Pound",
				fr: "Écras’face",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Happy Punch",
				fr: "Coup d’joie",
			},
			effect: {
				en: "Flip a coin. If heads, remove 3 damage counters from Chansey.",
				fr: "Lancez une pièce. Si c’est face, retirez 3 marqueurs de dégâts de Leveinard.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
