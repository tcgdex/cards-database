import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Ponchiot",
		en: "Lillipup",
		es: "Lillipup",
		it: "Lillipup",
		pt: "Lillipup",
		de: "Yorkleff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Ruade",
			en: "Rear Kick",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card