import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Bounsweet"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Its sweat is sweet, like syrup made from boiled-down fruit. Because of this, Bounsweet was highly valued in the past, when sweeteners were scarce."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card