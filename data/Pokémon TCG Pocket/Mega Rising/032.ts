import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ho-Oh"
	},

	illustrator: "Ryota Murayama",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		en: "It will reveal itself before a pure-hearted Trainer by\nshining its bright, rainbow-colored wings."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blessed Burn"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		effect: {
			en: "Heal 30 damage from each of your Benched Basic Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card