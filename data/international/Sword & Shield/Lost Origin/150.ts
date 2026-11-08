import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [819],
	set: Set,

	name: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674159,
				tcgplayer: 284078
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674159,
				tcgplayer: 284078
			}
		},
	],
}

export default card
