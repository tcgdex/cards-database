import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Vanilluxe"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Vanillish"
	},

	description: {
		en: "People believe this Pokémon formed when two\nVanillish stuck together. Its body temperature is\nroughly 21 degrees Fahrenheit."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Sweets Relay"
		},

		damage: 60,
		cost: ["Water", "Water"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card