import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Zangoose",
		fr: "Mangriff",
		de: "Sengo",
		it: "Zangoose",
		es: "Zangoose",
		pt: "Zangoose"
	},

	illustrator: "Yuya Oka",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			it: "Lacerazione",
			es: "Cuchillada",
			pt: "Talho"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card