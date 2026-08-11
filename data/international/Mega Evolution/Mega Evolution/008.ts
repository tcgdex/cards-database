import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'de-de': "Endivie",
		'it-it': "Chikorita",
		'es-es': "Chikorita",
		'pt-br': "Chikorita",
		'es-mx': "Chikorita"
	},

	illustrator: "kamonabe",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [152],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'de-de': "Rasierblatt",
			'it-it': "Foglielama",
			'es-es': "Hoja Afilada",
			'pt-br': "Folha Navalha",
			'es-mx': "Hojas Navaja"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851079,
				tcgplayer: 654347
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851079,
				tcgplayer: 654347
			}
		},
	],
}

export default card
