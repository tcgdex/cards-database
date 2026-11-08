import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [664],

	name: {
		'en-us': "Scatterbug",
		'fr-fr': "Lépidonille",
		'es-es': "Scatterbug",
		'es-mx': "Scatterbug",
		'de-de': "Purmel",
		'it-it': "Scatterbug",
		'pt-br': "Scatterbug"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'es-mx': "Mordisquear",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída"
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
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684363,
				cardmarket: 877419
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684363,
				cardmarket: 877419
			}
		}
	],

}

export default card
