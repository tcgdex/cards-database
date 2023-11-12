import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Soporifik",
		en: "Drowzee",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Psykoud'Boul",
			en: "Zen Headbutt",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			de: "Zen-Kopfstoß"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card