import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [66],
	set: Set,

	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'pt-br': "Soco",
			'de-de': "Boxhieb"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674099,
				tcgplayer: 283971
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674099,
				tcgplayer: 283971
			}
		},
	],
}

export default card
