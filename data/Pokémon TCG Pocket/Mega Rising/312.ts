import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "All it does is sleep during the daytime. At night,\nit patrols its territory with its eyes aglow."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pay Day"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card