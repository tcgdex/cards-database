import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Oddish",
		fr: "Mystherbe",
		es: "Oddish",
		'es-mx': "Oddish",
		de: "Myrapla",
		it: "Oddish",
		pt: "Oddish"
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
			en: "Seed Bomb",
			fr: "Canon Graine",
			es: "Bomba Germen",
			'es-mx': "Bomba Semilla",
			de: "Samenbomben",
			it: "Semebomba",
			pt: "Bomba de Sementes"
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
		en: "Its scientific name is Oddium wanderus. It is said to cover distances as far as 1,000 feet when night falls, walking on its two roots.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 857576,
				tcgplayer: 662205
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 857576,
				tcgplayer: 662205
			}
		},
	],
}

export default card
