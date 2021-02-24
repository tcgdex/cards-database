import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Sunkern",
		fr: "Tournegrin",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		191,
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
				en: "Sun Soak",
				fr: "Trempe-soleil",
			},
			effect: {
				en: "Flip a coin. If heads, remove all damage counters from Sunkern, search your deck for an Evolution card that evolves from Sunkern, and put it onto Sunkern. (This counts as evolving Sunkern.) Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, retirez à Tournegrin tous ses marqueurs de dégât, cherchez dans votre deck une carte Évolution qui évolue de Tournegrin et placez-la sur Tournegrin. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
