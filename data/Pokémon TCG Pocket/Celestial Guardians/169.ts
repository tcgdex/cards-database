import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Sandygast"
	},

	illustrator: "Yukihiro Tada",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "If it loses its shovel, it will stick something else—like a branch—in its head to make do until it finds another shovel."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vibration"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card