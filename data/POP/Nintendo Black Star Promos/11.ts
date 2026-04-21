import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Marshtomp",
		fr: "Flobio"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		259,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, Le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
