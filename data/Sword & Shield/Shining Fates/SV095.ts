import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Couaneton",
		en: "Ducklett"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Battement",
			en: "Flap"
		},

		damage: 20,
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

	retreat: 1
}

export default card