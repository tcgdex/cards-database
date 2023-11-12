import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Minidraco",
		en: "Dratini",
		es: "Dratini",
		it: "Dratini",
		pt: "Dratini",
		de: "Dratini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Bataille",
			en: "Beat",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 10
	}, {
		cost: ["Water", "Lightning"],

		name: {
			fr: "Fouet Draconien",
			en: "Draconic Whip",
			es: "Látigo Dracónico",
			it: "Frustata del Drago",
			pt: "Chicote Dracônico",
			de: "Drachenpeitsche"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card