import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Magearna"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		en: "It synchronizes its consciousness with others\nto understand their feelings. This faculty makes\nit useful for taking care of people."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Silver Cannon"
		},

		damage: 40,
		cost: ["Metal", "Metal"],

		effect: {
			en: "If your opponent's Active Pokémon has an Ability, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card