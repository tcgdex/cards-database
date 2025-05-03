import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Magmar"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		en: "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fire Blast"
		},

		damage: 80,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard 2 <span class=\"energy-text energy-text--type-fire\"></span> Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
