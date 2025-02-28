import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Phione"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "When the water warms, they inflate the flotation sac<br />on their heads and drift languidly on the sea<br />in packs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Pulse"
		},

		damage: 40,
		cost: ["Water", "Water"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card