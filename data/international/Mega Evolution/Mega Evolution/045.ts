import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'de-de': "Magnetilo",
		'it-it': "Magnemite",
		'es-es': "Magnemite",
		'pt-br': "Magnemite",
		'es-mx': "Magnemite"
	},

	illustrator: "Krgc",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [81],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'de-de': "Strahl",
			'it-it': "Raggio",
			'es-es': "Transmisión",
			'pt-br': "Feixe",
			'es-mx': "Rayo"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851116,
				tcgplayer: 654384
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851116,
				tcgplayer: 654384
			}
		},
	],
}

export default card
