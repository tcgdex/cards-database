import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Barraskewda",
		fr: "Hastacuda",
		es: "Barraskewda",
		it: "Barraskewda",
		pt: "Barraskewda",
		de: "Barrakiefa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Arrokuda",
		fr: "Embrochet",
		es: "Arrokuda",
		it: "Arrokuda",
		pt: "Arrokuda",
		de: "Pikuda"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Hideki Ishikawa",

	description: {
		en: "It spins its tail fins to propel itself, surging forward at speeds of over 100 knots before ramming prey and spearing into them."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			de: "Durchbohren",
			es: "Perforar",
			pt: "Perfurar",
			it: "Perforare"
		},

		damage: 50
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card