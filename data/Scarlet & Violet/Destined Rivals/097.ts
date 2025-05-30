import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Fidough",
		fr: "Pâtachiot",
		de: "Hefel",
		it: "Fidough",
		es: "Fidough",
		pt: "Fidough"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			es: "Patada Trasera",
			pt: "Chute Traseiro"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card