import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [296],
	set: Set,

	name: {
		fr: "Makuhita",
		en: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Grande Claque",
			en: "Slap Push",
			es: "Empujón con Bofetón",
			it: "Spintonata",
			pt: "Tapa Empurrão",
			de: "Stoß"
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kurata So"
}

export default card