import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Oddish",
		fr: "Mystherbe",
		es: "Oddish",
		it: "Oddish",
		pt: "Oddish",
		de: "Myrapla"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			es: "Hoja Afilada",
			it: "Foglielama",
			pt: "Folha Navalha",
			de: "Rasierblatt"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card