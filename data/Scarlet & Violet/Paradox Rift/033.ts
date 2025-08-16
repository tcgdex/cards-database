import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [223],
	set: Set,

	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		es: "Remoraid",
		it: "Remoraid",
		pt: "Remoraid",
		de: "Remoraid"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sprinkle Water",
			fr: "Eau Aspergeante",
			es: "Esparcir Agua",
			it: "Goccioline",
			pt: "Aspergir Água",
			de: "Wassersprüher"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Midori Harada",

	thirdParty: {
		cardmarket: 740509
	}
}

export default card