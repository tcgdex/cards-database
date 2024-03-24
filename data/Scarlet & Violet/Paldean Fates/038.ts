import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Fidough",
		fr: "Pâtachiot",
		es: "Fidough",
		it: "Fidough",
		pt: "Fidough"
	},

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
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card