import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Popplio"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sing"
		},

		cost: ["Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card