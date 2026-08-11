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

	illustrator: "kurumitsu",
	rarity: "Uncommon",
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
			type: "normal",
			thirdParty: {
				cardmarket: 835912,
				tcgplayer: 642454
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835912,
				tcgplayer: 642454
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836262,
				tcgplayer: 642699
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836272,
				tcgplayer: 642627
			}
		}
	],
}

export default card
