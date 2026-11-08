import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		'en-us': "Lechonk",
		'fr-fr': "Gourmelet",
		'es-es': "Lechonk",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'de-de': "Ferkuli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785980,
				tcgplayer: 567369
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785980,
				tcgplayer: 567369
			}
		},
	],

	illustrator: "REND",

}

export default card
