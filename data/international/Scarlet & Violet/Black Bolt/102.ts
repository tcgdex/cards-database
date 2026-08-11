import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [516],
	set: Set,

	name: {
		'en-us': "Simipour",
		'fr-fr': "Flotoutan",
		'de-de': "Sodachita",
		'it-it': "Simipour",
		'pt-br': "Simipour",
		'es-es': "Simipour",
		'es-mx': "Simipour"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'de-de': "Sodamak",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'es-es': "Panpour",
		'es-mx': "Panpour"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'es-es': "Bofetada Gentil",
			'es-mx': "Cachetadita"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836111,
				tcgplayer: 642555
			}
		},
	]
}

export default card
