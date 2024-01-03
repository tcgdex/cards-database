import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Pomdepik",
		en: "Pineco",
		es: "Pineco",
		it: "Pineco",
		pt: "Pineco",
		de: "Tannza"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			fr: "Roulade",
			en: "Rollout",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card