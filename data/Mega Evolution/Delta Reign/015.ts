import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Smoliv",
		fr: "Olivini",
		de: "Olini",
		es: "Smoliv",
		it: "Smoliv",
		pt: "Smoliv",
		'es-mx': "Smoliv"
	},

	illustrator: "Kanami Ogata",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
			de: "Sprühwasser",
			es: "Fluido Rociado",
			it: "Fluidospray",
			pt: "Fluido Spray",
			'es-mx': "Rociar Líquido"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 727571,
				cardmarket: 918825
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 727571,
				cardmarket: 918825
			}
		}
	],
}

export default card