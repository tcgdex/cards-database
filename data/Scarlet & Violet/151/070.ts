import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [70],
	set: Set,

	name: {
		fr: "Boustiflor",
		en: "Weepinbell",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		fr: "Chétiflor",
		en: "Bellsprout",
		es: "Bellsprout",
		it: "Bellsprout",
		pt: "Bellsprout",
		de: "Knofensa"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Coupe",
			en: "Cut",
			es: "Corte",
			it: "Taglio",
			pt: "Cortar",
			de: "Zerschneider"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Fluide Éclaboussant",
			en: "Spray Fluid",
			es: "Fluido Rociado",
			it: "Fluidospray",
			pt: "Fluido Spray",
			de: "Sprühwasser"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "It spits out Poison Powder to immobilize the enemy and then finishes it with a spray of Acid.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733665,
				tcgplayer: 516563,
				cardtrader: 261159
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733665,
				tcgplayer: 516563,
				cardtrader: 261159
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
