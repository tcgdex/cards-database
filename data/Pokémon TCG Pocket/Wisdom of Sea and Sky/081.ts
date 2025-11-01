import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Natu",
		fr: "Natu"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It is extremely good at climbing tree trunks and\nlikes to eat the new sprouts on the trees.",
		fr: "Il est très doué pour grimper aux arbres et ainsi manger les bourgeons dont il raffole."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card