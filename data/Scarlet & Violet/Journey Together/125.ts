import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [572],
	set: Set,

	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		de: "Picochilla",
		it: "Minccino",
		pt: "Minccino",
		'es-mx': "Minccino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			es: "Bofetón",
			de: "Hieb",
			it: "Sberla",
			pt: "Tapa",
			'es-mx': "Bofetón"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Oswaldo KATO",

	thirdParty: {
		cardmarket: 817277
	}
}

export default card