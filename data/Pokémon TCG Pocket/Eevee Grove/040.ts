import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Mienfoo"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "In one minute, a well-trained Mienfoo can chop\nwith its arms more than 100 times."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Kick Shot"
		},

		damage: 40,
		cost: ["Fighting"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card