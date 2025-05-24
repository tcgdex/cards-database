import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		pt: "Noibat",
		it: "Noibat",
		de: "eF-eM"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			pt: "Asa",
			it: "Alabattito",
			de: "Flattern"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Masako Tomii"
}

export default card