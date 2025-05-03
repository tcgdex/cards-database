import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonlee"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Stretch Kick"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
	}
}

export default card
