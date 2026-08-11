import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'es-es': "Oddish",
		'es-mx': "Oddish",
		'de-de': "Myrapla",
		'it-it': "Oddish",
		'pt-br': "Oddish"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [43],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'es-mx': "Bomba Semilla",
			'de-de': "Samenbomben",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes"
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

	description: {
		'en-us': "Its scientific name is Oddium wanderus. It is said to cover distances as far as 1,000 feet when night falls, walking on its two roots.",
	},

	illustrator: "MINAMINAMI Take",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857576,
				tcgplayer: 662205,
				cardtrader: 356785
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857576,
				tcgplayer: 662205,
				cardtrader: 356785
			}
		},
	],
}

export default card
