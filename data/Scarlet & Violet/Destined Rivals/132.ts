import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Pawniard",
		fr: "Scalpion",
		de: "Gladiantri",
		it: "Pawniard",
		es: "Pawniard",
		pt: "Pawniard"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			es: "Arañazo",
			pt: "Arranhão"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			de: "Durchbohren",
			it: "Perforare",
			es: "Perforar",
			pt: "Perfurar"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card