import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal",
		es: "Melmetal",
		it: "Melmetal",
		pt: "Melmetal",
		de: "Melmetal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 120
	}, {
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Iron Bash",
			fr: "Coup de Fer",
			es: "Ferropuño",
			it: "Pugni Ferrei",
			pt: "Pancada de Ferro",
			de: "Eisenwumme"
		},

		damage: 230
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card