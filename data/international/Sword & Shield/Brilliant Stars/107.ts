import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [443],
	set: Set,

	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'es-es': "Gible",
		'it-it': "Gible",
		'pt-br': "Gible",
		'de-de': "Kaumalat"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Fighting"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Gible prefers to stay in narrow holes in the sides of caves heated by geothermal energy. This way, Gible can stay warm even during a blizzard.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608653,
				tcgplayer: 263827
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608653,
				tcgplayer: 263827
			}
		},
	],
}

export default card
