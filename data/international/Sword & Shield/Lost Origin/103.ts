import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [619],
	set: Set,

	name: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Chop",
			'fr-fr': "Coup Tranchant",
			'es-es': "Cortar",
			'it-it': "Ceffone",
			'pt-br': "Trincar",
			'de-de': "Hacker"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Spiral Kick",
			'fr-fr': "Coup'd Pied en Spirale",
			'es-es': "Patada Espiral",
			'it-it': "Spiralcalcio",
			'pt-br': "Chute Espiral",
			'de-de': "Drehtritt"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674116,
				tcgplayer: 283997
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674116,
				tcgplayer: 283997
			}
		},
	],
}

export default card
