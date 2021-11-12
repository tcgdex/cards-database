import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 40,

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
				en: "Tackle",
				fr: "Charge"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubblebeam",
				fr: "Bulles d'O"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "La nuit, le centre de son corps clignote doucement au rythme d'un cœur humain."
	}
}

export default card
