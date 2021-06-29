import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Spheal",
		fr: "Obalie",
		es: "Spheal",
		it: "Spheal",
		pt: "Spheal",
		de: "Seemops"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card