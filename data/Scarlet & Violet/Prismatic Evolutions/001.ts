import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [102],
	set: Set,

	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		pt: "Exeggcute",
		it: "Exeggcute",
		de: "Owei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	// NEW: reverse variants present in Prismatic Evolutions
	// - normal reverse
	// - Poké Ball reverse
	// - Master Ball reverse
	// (No standard holo on this common, so holo=false)
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		pokeball_reverse: true,   // NEW
		masterball_reverse: true  // NEW
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			pt: "Aríete",
			it: "Carica",
			de: "Ramme"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Iori Suzuki",

	thirdParty: {
		cardmarket: 805390
	}
}

export default card
