import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		en: "Miraidon",
		fr: "Miraidon",
		es: "Miraidon",
		it: "Miraidon",
		pt: "Miraidon",
		de: "Miraidon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Electric Claws",
			fr: "Griffes Électriques",
			es: "Garras Eléctricas",
			it: "Artigli Elettrici",
			pt: "Garras Elétricas",
			de: "Elektrokrallen"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
			es: "Rayo Mach",
			it: "Fulmine Mach",
			pt: "Raio Supersônico",
			de: "Flotter Sprung"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "hncl"
}

export default card