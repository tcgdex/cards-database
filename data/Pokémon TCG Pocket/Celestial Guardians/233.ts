import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Starmie ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Staryu"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Hydro Splash"
		},

		damage: 90,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0
}

export default card