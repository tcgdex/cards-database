import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Gligar",
		fr: "Scorplane"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It usually clings to cliffs. When it spots its prey,\nit spreads its wings and glides down to attack.",
		fr: "Il s'accroche souvent aux falaises. Sa proie repérée, il plane vers elle pour l'attaquer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Glide",
			fr: "Glissement"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card