import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Scorbunny",
		fr: "Flambino",
		es: "Scorbunny",
		it: "Scorbunny",
		pt: "Scorbunny",
		de: "Hopplo"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d’Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card