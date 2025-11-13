import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Archeops"
	},

	illustrator: "OKUBO",
	rarity: "One Star",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Archen"
	},

	description: {
		en: "Though capable of flight, Archeops was\napparently better at hunting on the ground."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Wild Spin"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. During your next turn, this Pokémon's Wild Spin attack does +20 damage to each of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card