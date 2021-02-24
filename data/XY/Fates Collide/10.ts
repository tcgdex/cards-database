import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		653,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whip",
				fr: "Mimi-Queue",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
