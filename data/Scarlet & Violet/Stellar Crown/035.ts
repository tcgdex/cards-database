import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [456],
	set: Set,

	name: {
		en: "Finneon",
		fr: "Écayon",
		es: "Finneon",
		it: "Finneon",
		pt: "Finneon",
		de: "Finneon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Sprinkle Water",
			fr: "Eau Aspergeante",
			es: "Esparcir Agua",
			it: "Goccioline",
			pt: "Aspergir Água",
			de: "Wassersprüher"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Yukiko Baba"
}

export default card
