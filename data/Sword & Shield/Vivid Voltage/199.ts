import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Gouroutan"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Sagesse du Primate"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez échanger une carte de votre main contre la carte du dessus de votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Assommer"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card