import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Pineco",
		fr: "Pomdepik",
		es: "Pineco",
		it: "Pineco",
		pt: "Pineco"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card