import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [108],
	set: Set,

	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Drool",
			'fr-fr': "Gluant",
			'es-es': "Babeo",
			'it-it': "Sbavare",
			'pt-br': "Babar",
			'de-de': "Sabbern"
		},

		damage: 30
	}],

	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674148,
				tcgplayer: 284061
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674148,
				tcgplayer: 284061
			}
		},
	],
}

export default card
