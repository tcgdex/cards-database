import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
	},
	illustrator: "Tomomi Kaneko",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		393,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Bubble Hold",
				fr: "Bulles Bloquantes",
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 80,

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
