import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

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

	illustrator: "Makura Tami",
	rarity: "Promo",
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

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 879255,
				tcgplayer: 686342
			}
		},
	],
}

export default card
