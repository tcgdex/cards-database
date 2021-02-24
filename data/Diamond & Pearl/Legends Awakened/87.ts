import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Loupio",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		170,
	],
	hp: 60,
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
				en: "Supersonic",
				fr: "Ultrason",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	retreat: 2,



}

export default card
