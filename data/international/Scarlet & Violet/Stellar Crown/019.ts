import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [77],
	set: Set,

	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785872,
				tcgplayer: 567245
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785872,
				tcgplayer: 567245
			}
		},
	],

	illustrator: "Atsushi Furusawa",

}

export default card
