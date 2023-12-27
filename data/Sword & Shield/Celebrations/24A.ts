import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "_____'s Pikachu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Birthday Surprise"
		},

		effect: {
			en: "If it's not your birthday, this attack does 30 damage. If it is your birthday, flip a coin. If heads, this attack does 30 damage plus 50 more damage; if tails, this attack does 30 damage."
		},

		damage: "30+",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: ""
	}],

	retreat: 1,

	description: {
		en: "Your Birthdate: ______________________________"
	}
}

export default card
