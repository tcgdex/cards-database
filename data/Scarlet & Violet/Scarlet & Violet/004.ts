import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom",
		de: "Kapilz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Shroomish"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Mach Cross",
			fr: "Passage Éclair",
			es: "Puñetazo Mach",
			it: "Incromach",
			pt: "Cruzado Veloz",
			de: "Tempo-Cross"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card