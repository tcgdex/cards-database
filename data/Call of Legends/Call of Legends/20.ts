import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
		de: "Rayquaza"
	},

	illustrator: "Ryo Ueda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [384],

	hp: 100,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Inferno Spear",
				fr: "Lance infernale",
				de: "Inferno-Speer"
			},
			effect: {
				en: "Discard a Fire Energy and a Lightning Energy attached to Rayquaza.",
				fr: "Défaussez une Énergie Fire et une Énergie Lightning attachées à Rayquaza.",
				de: "Lege 1 - und 1 -Energie, die an Rayquaza angelegt sind, auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		en: "It flies in the ozone layer, way up high in the sky. Until recently, no one had ever seen it.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88628,
				cardmarket: 279635
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88628,
				cardmarket: 279635
			},
		},
	],

}

export default card
