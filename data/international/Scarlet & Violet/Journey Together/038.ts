import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [278],
	set: Set,

	name: {
		'en-us': "Wingull",
		'fr-fr': "Goélise",
		'es-es': "Wingull",
		'de-de': "Wingull",
		'it-it': "Wingull",
		'pt-br': "Wingull",
		'es-mx': "Wingull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'de-de': "Flattern",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'es-mx': "Aleteo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Mékayu",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817190,
				tcgplayer: 623465
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817190,
				tcgplayer: 623465
			}
		},
	],
}

export default card
