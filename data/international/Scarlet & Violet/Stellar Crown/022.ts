import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [643],
	set: Set,

	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram",
		'es-es': "Reshiram",
		'it-it': "Reshiram",
		'pt-br': "Reshiram",
		'de-de': "Reshiram"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785875,
				tcgplayer: 567248
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785875,
				tcgplayer: 567248
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841263,
			}
		},
	],

	illustrator: "Iwamoto05",

}

export default card
