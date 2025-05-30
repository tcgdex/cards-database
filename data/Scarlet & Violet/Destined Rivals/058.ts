import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cetoddle",
		fr: "Piétacé",
		de: "Flaniwal",
		it: "Cetoddle",
		es: "Cetoddle",
		pt: "Cetoddle"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			es: "Placaje",
			pt: "Investida"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card