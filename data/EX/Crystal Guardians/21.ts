import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou"
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
				fr: "Rebond aérien"
			},
			effect: {
				en: "You pay Colorless less to retreat your Jigglypuff, Wigglytuff, Wigglytuff ex, and Igglybuff.",
				fr: "Vous payez un  de moins pour faire battre Rondoudou, Groudoudou, Grodoudou ex et Toudoudou en retraite."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
