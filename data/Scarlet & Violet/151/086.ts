import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [86],
	set: Set,

	name: {
		fr: "Otaria",
		en: "Seel",
		es: "Seel",
		it: "Seel",
		pt: "Seel",
		de: "Jurob"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Glacial",
			en: "Chilly",
			es: "Fresquito",
			it: "Addiaccio",
			pt: "Frio",
			de: "Frösteln"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "aoki"
}

export default card