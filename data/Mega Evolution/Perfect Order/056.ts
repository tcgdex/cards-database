import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		'es-mx': "Honedge",
		de: "Gramokles",
		it: "Honedge",
		pt: "Honedge"
	},

	illustrator: "Apios",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Cut",
			fr: "Coupe",
			es: "Corte",
			'es-mx': "Corte",
			de: "Zerschneider",
			it: "Taglio",
			pt: "Cortar"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684378,
		cardmarket: 877472
	}
}

export default card