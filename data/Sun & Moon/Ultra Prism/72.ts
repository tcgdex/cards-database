import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		430,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rip and Run",
				fr: "Échapée Belle",
			},
			effect: {
				en: "Discard a random card from your opponent's hand. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire. Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
				fr: "Plongée Rapide",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
