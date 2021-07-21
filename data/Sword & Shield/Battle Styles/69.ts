import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		it: "Cubone",
		pt: "Cubone",
		de: "Tragosso"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Headbutt",
			fr: "Coup d’Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card