import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Grotle",
		fr: "Boskara",
		de: "Chelcarain"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		388,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Synthesis",
				fr: "Synthèse",
				de: "Synthese"
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Grass, et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer -Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
				de: "Zerschneider"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		fr: "Il vit en forêt près de l'eau. En journée, il la quitte pour dorer sa carapace feuillue au soleil."
	},

	thirdParty: {
		cardmarket: 277548,
		tcgplayer: 85916
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
