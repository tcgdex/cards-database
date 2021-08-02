import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Cacnea",
		en: "Cacnea",
		es: "Cacnea",
		it: "Cacnea",
		pt: "Cacnea",
		de: "Tuska"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Transpercement",
			en: "Pierce",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 50,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
