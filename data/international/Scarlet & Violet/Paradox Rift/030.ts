import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Hook",
			'fr-fr': "Crochet",
			'es-es': "Garfio",
			'it-it': "Uncino",
			'pt-br': "Gancho",
			'de-de': "Haken"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "They swim with dance-like motions and cause whirlpools to form. Horsea compete to see which of them can generate the biggest whirlpool.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740506,
				tcgplayer: 523639,
				cardtrader: 265069
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740506,
				tcgplayer: 523639,
				cardtrader: 265069
			}
		},
	],

	illustrator: "HYOGONOSUKE",

	
}

export default card
