import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		en: "After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Energy Whip"
		},

		damage: "20+",
		cost: ["Grass"],

		effect: {
			en: "If this Pokémon has at least 3 extra <span class=\"energy-text energy-text--type-grass\"></span> Energy attached, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
