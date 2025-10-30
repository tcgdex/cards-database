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

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
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
		cardmarket: 836111
	}
}

export default card