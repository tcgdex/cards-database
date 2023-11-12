import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Scarhino",
		en: "Heracross",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		de: "Skaraborn"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			fr: "Corne Fracassante",
			en: "Smashing Horn",
			es: "Cuerno Devastador",
			it: "Schiacciacorno",
			pt: "Chifre Esmagador",
			de: "Schmetterhorn"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			en: "This attack's damage isn't affected by Resistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 110
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card