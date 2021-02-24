import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Helioptile",
		fr: "Galvaran",
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		694,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whip",
				fr: "Mimi-Queue",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Ruade",
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

	retreat: 1,



}

export default card
