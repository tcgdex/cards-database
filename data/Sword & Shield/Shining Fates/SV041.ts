import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Toxizap",
		en: "Toxel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Gifle",
			en: "Slap"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Choc Statique",
			en: "Static Shock"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card