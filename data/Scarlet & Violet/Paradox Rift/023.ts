import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		en: "Fuecoco",
		fr: "Chochodile",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo",
			de: "Glühende Kohlen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740499,
				tcgplayer: 523630,
				cardtrader: 265093
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740499,
				tcgplayer: 523630,
				cardtrader: 265093
			}
		},
	],

	illustrator: "Gemi",

	
}

export default card
