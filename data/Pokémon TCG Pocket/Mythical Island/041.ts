import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		en: "It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Focus Fist"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
