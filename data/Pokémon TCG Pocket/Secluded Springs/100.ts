import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Wooper"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		en: "After losing a territorial struggle, Wooper began\nliving on land. The Pokémon changed over time,\ndeveloping a poisonous film to protect its body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Jab"
		},

		damage: 10,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card