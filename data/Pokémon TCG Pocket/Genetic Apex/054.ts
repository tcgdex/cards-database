import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wartortle"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Squirtle"
	},


	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
	}
}

export default card
