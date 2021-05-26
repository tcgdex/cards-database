import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Glameow",
		fr: "Chaglam"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Cat Kick",
			fr: "Coup d’Patte"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card