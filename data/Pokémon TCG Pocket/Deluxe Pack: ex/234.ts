import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Grimer"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "There are a hundred or so of them living in\nAlola's waste-disposal site. They're all hard\nworkers who eat a lot of trash."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sludge Toss"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card