import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [514],
	set: Set,

	name: {
		en: "Simisear",
		fr: "Flamoutan",
		de: "Grillchita",
		it: "Simisear",
		pt: "Simisear",
		es: "Simisear",
		'es-mx': "Simisear"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
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
	regulationMark: "I"
}

export default card