import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Wartortle"
	},

	illustrator: "Nelnal",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Squirtle"
	},

	description: {
		en: "It is recognized as a symbol of longevity. If its\nshell has algae on it, that Wartortle is very old."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card