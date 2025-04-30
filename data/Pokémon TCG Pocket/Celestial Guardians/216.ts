import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wartortle"
	},

	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Squirtle"
	},

	description: {
		en: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old."
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