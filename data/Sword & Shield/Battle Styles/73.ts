import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Timburr",
		fr: "Charpenti",
		es: "Timburr",
		it: "Timburr",
		pt: "Timburr",
		de: "Praktibalk"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras’Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Klaps"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Timburr that have started carrying logs that are about three times their size are nearly ready to evolve."
	}
}

export default card