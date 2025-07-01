import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Fomantis",
		fr: "Mimantis",
		de: "Imantis",
		it: "Fomantis",
		es: "Fomantis",
		pt: "Fomantis",
		'es-mx': "Fomantis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Cut Up",
			fr: "Découpage",
			de: "Zerhäckseln",
			it: "Tagliuzzamento",
			es: "Trocear",
			pt: "Dilacerar",
			'es-mx': "Trozar"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
