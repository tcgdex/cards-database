import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Revavroom",
		fr: "Vrombotor",
		es: "Revavroom",
		it: "Revavroom",
		pt: "Revavroom",
		de: "Knattatox"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Outta-Control Dash",
			fr: "Ruée Incontrôlable",
			es: "A Todo Gas",
			it: "Corsa Senza Freni",
			pt: "Investida Desgovernada",
			de: "Furioses Flitzen"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
