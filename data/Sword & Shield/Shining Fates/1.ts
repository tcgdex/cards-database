import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Yanma",
		en: "Yanma",
		es: "Yanma",
		it: "Yanma",
		pt: "Yanma",
		de: "Yanma"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			fr: "Cru-Ailes",
			en: "Wing Attack",
			es: "Ataque Ala",
			it: "Attacco d’Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area."
	}
}

export default card
