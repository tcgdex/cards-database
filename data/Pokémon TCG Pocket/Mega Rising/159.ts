import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Skrelp"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [690],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "This Pokémon is a poor swimmer. If it's caught in\na fierce storm, it will sometimes get washed far\naway and become unable to return to its home."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Razor Fin"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card