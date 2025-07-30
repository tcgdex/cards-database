import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Nymble",
		fr: "Lilliterelle",
		es: "Nymble",
		it: "Nymble",
		pt: "Nymble",
		de: "Micrick"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			pt: "Baque",
			de: "Plumps"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
		cardmarket: 740489
	}
}

export default card