import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [10],
	set: Set,

	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'de-de': "Raupy",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'es-mx': "Caterpie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'de-de': "Käferbiss",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'es-mx': "Picadura"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Shimaris Yukichi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817153,
				tcgplayer: 623428
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817153,
				tcgplayer: 623428
			}
		},
	],
}

export default card
