import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Grillepattes",
		en: "Sizzlipede"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Morsure",
			en: "Bite"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Fournaise",
			en: "Combustion"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card