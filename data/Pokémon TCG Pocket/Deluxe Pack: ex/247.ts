import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Nihilego"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "A life-form from another world, it was dubbed\na UB and is thought to produce a\nstrong neurotoxin."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "More Poison"
		},

		effect: {
			en: "Your opponent's Active Pokémon takes +10 damage from being Poisoned."
		}
	}],

	attacks: [{
		name: {
			en: "New Wave"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card