import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [231],
	set: Set,

	name: {
		en: "Phanpy",
		fr: "Phanpy",
		es: "Phanpy",
		it: "Phanpy",
		pt: "Phanpy",
		de: "Phanpy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "ryoma uratsuka"
}

export default card
