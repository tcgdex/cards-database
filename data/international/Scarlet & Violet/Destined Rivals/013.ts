import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [753],
	set: Set,

	name: {
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
		'de-de': "Imantis",
		'it-it': "Fomantis",
		'es-es': "Fomantis",
		'pt-br': "Fomantis",
		'es-mx': "Fomantis"
	},

	illustrator: "mashu",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Cut Up",
			'fr-fr': "Découpage",
			'de-de': "Zerhäckseln",
			'it-it': "Tagliuzzamento",
			'es-es': "Trocear",
			'pt-br': "Dilacerar",
			'es-mx': "Trozar"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825887,
				tcgplayer: 632839
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825887,
				tcgplayer: 632839
			}
		},
	],
}

export default card
