import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [512],
	set: Set,

	name: {
		'en-us': "Simisage",
		'fr-fr': "Feuiloutan",
		'de-de': "Vegichita",
		'it-it': "Simisage",
		'pt-br': "Simisage",
		'es-es': "Simisage",
		'es-mx': "Simisage"
	},

	illustrator: "Yuka Tanaka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'de-de': "Vegimak",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'es-es': "Pansage",
		'es-mx': "Pansage"
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
				cardmarket: 836089,
				tcgplayer: 642539
			}
		},
	]
}

export default card
