import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	illustrator: "SATOSHI NAKAI",

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Gentle Slap",
			de: "Sanfter Hieb"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card