import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx",
		de: "Sheinux"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Naoyo Kimura",

	description: {
		en: "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			es: "Roer",
			pt: "Roída",
			it: "Rosicchiamento"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electric Claws",
			fr: "Griffes Électriques",
			de: "Elektrokrallen",
			es: "Garras Eléctricas",
			pt: "Garras Elétricas",
			it: "Artigli Elettrici"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card