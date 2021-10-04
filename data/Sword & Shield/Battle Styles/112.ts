import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Fearow",
		fr: "Rapasdepic",
		es: "Fearow",
		it: "Fearow",
		pt: "Fearow",
		de: "Ibitak"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
		es: "Spearow",
		it: "Spearow",
		pt: "Spearow",
		de: "Habitak"
	},

	attacks: [{
		name: {
			en: "Drill Peck",
			fr: "Bec Vrille",
			es: "Pico Taladro",
			it: "Perforbecco",
			pt: "Bico Broca",
			de: "Bohrschnabel"
		},

		damage: 70,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	regulationMark: "E",
	retreat: 0,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Carrying food through Fearow’s territory is dangerous. It will snatch the food away from you in a flash!"
	}
}

export default card