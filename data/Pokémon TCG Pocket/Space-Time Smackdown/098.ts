import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Sneasel"
	},

	illustrator: "Hasuno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "This cunning Pokémon hides under the cover of darkness, waiting to attack its prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Scratch"
		},

		damage: "20×",
		cost: ["Darkness"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
