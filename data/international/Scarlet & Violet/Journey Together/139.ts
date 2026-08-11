import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		'en-us': "Lechonk",
		'fr-fr': "Gourmelet",
		'es-es': "Lechonk",
		'de-de': "Ferkuli",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'es-mx': "Lechonk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'es-mx': "Colisión"
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
	regulationMark: "H",
	illustrator: "OKACHEKE",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817291,
				tcgplayer: 623566
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817291,
				tcgplayer: 623566
			}
		},
	],
}

export default card
