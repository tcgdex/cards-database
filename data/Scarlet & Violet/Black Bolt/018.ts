import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [516],
	set: Set,

	name: {
		en: "Simipour",
		fr: "Flotoutan",
		de: "Sodachita",
		it: "Simipour",
		pt: "Simipour",
		es: "Simipour",
		'es-mx': "Simipour"
	},

	illustrator: "Makura Tami",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
		de: "Sodamak",
		it: "Panpour",
		pt: "Panpour",
		es: "Panpour",
		'es-mx': "Panpour"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha",
			es: "Bofetada Gentil",
			'es-mx': "Cachetadita"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835939
	}
}

export default card