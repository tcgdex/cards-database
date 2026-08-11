import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [513],
	set: Set,

	name: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'es-es': "Pansear",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'de-de': "Grillmak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 20
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
				cardmarket: 794277,
				tcgplayer: 590020
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794277,
				tcgplayer: 590020
			}
		},
	],

	illustrator: "Wintr Wandr",
	
}

export default card
