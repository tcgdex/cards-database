import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Pidgey",
		fr: "Roucool",
		de: "Taubsi"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		16,
	],

	hp: 50,

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
				en: "Corner",
				fr: "Angle",
				de: "Corner"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire.",
				de: "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Gust"
			},

			damage: 20,

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
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276249,
		tcgplayer: 88048
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"]
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"]
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"]
		}
	]
}

export default card
