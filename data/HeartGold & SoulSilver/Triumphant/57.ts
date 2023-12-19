import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Bellsprout",
		fr: "Chétiflor",
		de: "Knofensa"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		69,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Inviting Scent",
				fr: "Senteur ensorcelante",
				de: "Einladender Duft"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent’s Benched Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec l’un des Pokémon de Banc de votre adversaire.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegeners aus."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Careless Tackle",
				fr: "Plaquage imprudent",
				de: "Unvorsichtiger Tackle"
			},
			effect: {
				en: "Bellsprout does 10 damage to itself.",
				fr: "Chetiflor s’inflige 10 dégâts.",
				de: "Knofensa fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Even though its body is extremely skinny, it is blindingly fast when catching its prey."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
