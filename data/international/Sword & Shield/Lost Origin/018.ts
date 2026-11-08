import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [824],
	set: Set,

	name: {
		'en-us': "Blipbug",
		'fr-fr': "Larvadar",
		'es-es': "Blipbug",
		'it-it': "Blipbug",
		'pt-br': "Blipbug",
		'de-de': "Sensect"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

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


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674029,
				tcgplayer: 283885
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674029,
				tcgplayer: 283885
			}
		},
	],
}

export default card
