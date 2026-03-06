import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
		de: "Fluffeluff"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		174,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hover Lift",
				fr: "Rebond aérien",
				de: "Schwebelift"
			},
			effect: {
				en: "You pay Colorless less to retreat your Jigglypuff, Wigglytuff, Wigglytuff ex, and Igglybuff.",
				fr: "Vous payez un  de moins pour faire battre Rondoudou, Groudoudou, Grodoudou ex et Toudoudou en retraite.",
				de: "Der Rückzug deiner Pummeluff, Knuddeluff, Knuddeluff ex und Fluffeluff kostet dich  weniger."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277102,
		tcgplayer: 86261
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
