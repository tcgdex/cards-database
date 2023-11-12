import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Vrombi",
		en: "Varoom",
		es: "Varoom",
		it: "Varoom",
		pt: "Varoom",
		de: "Knattox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			fr: "Gaz Suffocant",
			en: "Suffocating Gas",
			es: "Gas Sofocante",
			it: "Gas Soffocante",
			pt: "Gás Asfixiante",
			de: "Würgegas"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card