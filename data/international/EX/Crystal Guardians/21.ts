import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Igglybuff",
		'fr-fr': "Toudoudou",
		'de-de': "Fluffeluff"
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
				'en-us': "Hover Lift",
				'fr-fr': "Rebond aérien",
				'de-de': "Schwebelift",
			},
			effect: {
				'en-us': "You pay Colorless less to retreat your Jigglypuff, Wigglytuff, Wigglytuff ex, and Igglybuff.",
				'fr-fr': "Vous payez un  de moins pour faire battre Rondoudou, Groudoudou, Grodoudou ex et Toudoudou en retraite.",
				'de-de': "Der Rückzug deiner Pummeluff, Knuddeluff, Knuddeluff ex und Fluffeluff kostet dich  weniger.",
			},
		},
		{
			type: "Poke-POWER",
			name: {
				'fr-fr': "Évolution bébé",
			},
			effect: {
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Rondoudou de votre main sur Toudoudou (vous le faites ainsi évoluer) et retirer à Toudoudou tous ses marqueurs de dégât.",
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
