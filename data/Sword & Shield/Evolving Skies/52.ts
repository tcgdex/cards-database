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
		en: "Chinchou",
		fr: "Loupio",
		es: "Chinchou",
		it: "Chinchou",
		pt: "Chinchou",
		de: "Lampi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "sowsow",

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Electro Ball",
			de: "Elektroball"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card