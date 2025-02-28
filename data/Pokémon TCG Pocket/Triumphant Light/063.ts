import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax"
	},

	illustrator: "burari",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		en: "It is not satisfied unless it eats over 880 pounds<br />of food every day. When it is done eating, it<br />goes promptly to sleep."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Collapse"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4
}

export default card