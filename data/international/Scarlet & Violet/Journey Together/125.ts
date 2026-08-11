import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [572],
	set: Set,

	name: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'de-de': "Picochilla",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'es-mx': "Minccino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'de-de': "Hieb",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'es-mx': "Bofetón"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Oswaldo KATO",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817277,
				tcgplayer: 623552
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817277,
				tcgplayer: 623552
			}
		},
	],
}

export default card
