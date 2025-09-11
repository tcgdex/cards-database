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

	rarity: "Uncommon",
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
		cardmarket: 835939
	},

	variants: [{
		type: "normal",
		size: "standard",
		description: "Found in Booster Packs",
		set: "standard"
	}, {
		type: "reverse",
		size: "standard",
		description: "Found in Booster Packs",
		set: "parallel"
	}, {
		type: "reverse",
		size: "standard",
		foil: "pokeball",
		description: "Found in Booster Packs",
		set: "parallel"
	}, {
		type: "reverse",
		size: "standard",
		foil: "masterball",
		description: "Found in Booster Packs",
		set: "parallel"
	}]
}

export default card