import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [512],
	set: Set,

	name: {
		en: "Simisage",
		fr: "Feuiloutan",
		de: "Vegichita",
		it: "Simisage",
		pt: "Simisage",
		es: "Simisage",
		'es-mx': "Simisage"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
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
		cardmarket: 835912
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