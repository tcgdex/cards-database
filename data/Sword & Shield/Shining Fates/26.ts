import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Khélocrok",
		en: "Chewtle"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Charge",
			en: "Tackle"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			fr: "Morsure",
			en: "Bite"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card