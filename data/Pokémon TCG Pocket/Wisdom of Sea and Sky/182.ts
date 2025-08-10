import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Hoothoot"
	},

	illustrator: "Uninori",
	rarity: "One Star",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "It always stands on one foot. It changes feet so\nfast, the movement can rarely be seen."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Insomnia"
		},

		effect: {
			en: "This Pokémon can't be Asleep."
		}
	}],

	attacks: [{
		name: {
			en: "Wing Attack"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card