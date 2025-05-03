import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb"
	},

	illustrator: "Shinji Kanda",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Swirling Disaster"
		},

		cost: ["Colorless"],

		effect: {
			en: "This attack does 10 damage to each of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
