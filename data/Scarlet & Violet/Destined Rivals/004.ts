import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Breloom",
		fr: "Chapignon",
		de: "Kapilz",
		it: "Breloom",
		es: "Breloom",
		pt: "Breloom"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Mach Cross",
			fr: "Passage Éclair",
			de: "Tempo-Cross",
			it: "Incromach",
			es: "Puñetazo Mach",
			pt: "Cruzado Veloz"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card