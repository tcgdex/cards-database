import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [204],
	set: Set,

	name: {
		en: "Pineco",
		fr: "Pomdepik",
		es: "Pineco",
		it: "Pineco",
		pt: "Pineco",
		de: "Tannza"
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
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Scav",

	thirdParty: {
		cardmarket: 751527
	}
}

export default card