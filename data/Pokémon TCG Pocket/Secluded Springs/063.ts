import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Azurill"
	},

	illustrator: "Rond",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		en: "Its tail bounces like a rubber ball. It flings that tail\naround to fight opponents bigger than itself."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Squishy Healing"
		},

		effect: {
			en: "Heal 50 damage from 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card