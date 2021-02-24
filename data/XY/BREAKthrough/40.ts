import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		460,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Age",
				fr: "Période Glaciaire",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Dragon Pokémon, it is now Paralyzed.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, il est maintenant Paralysé.",
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Breath",
				fr: "Souffle Glacé",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
