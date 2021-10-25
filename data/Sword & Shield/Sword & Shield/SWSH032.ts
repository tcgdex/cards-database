import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax"
	},

	illustrator: "Tika Matsuno",
	rarity: "None",
	category: "Pokemon",
	dexId: [143],
	hp: 150,
	types: ["Colorless"],

	description: {
		en: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle"
		},

		damage: 80
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card