import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [859],
	set: Set,

	name: {
		en: "Impidimp",
		fr: "Grimalin",
		es: "Impidimp",
		de: "Bähmon",
		it: "Impidimp",
		pt: "Impidimp",
		'es-mx': "Impidimp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Haru Akasaka",

	thirdParty: {
		cardmarket: 817223
	},

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
