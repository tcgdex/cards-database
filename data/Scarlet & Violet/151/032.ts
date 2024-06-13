import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [32],
	set: Set,

	name: {
		fr: "Nidoran♂",
		en: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran♂",
		pt: "Nidoran♂",
		de: "Nidoran♂"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Koud'Korne",
			en: "Horn Attack",
			es: "Cornada",
			it: "Incornata",
			pt: "Ataque de Chifre",
			de: "Hornattacke"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card