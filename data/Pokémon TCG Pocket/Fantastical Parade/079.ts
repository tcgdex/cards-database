import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Machop"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "Always brimming with power, it passes time by\nlifting boulders. Doing so makes it even stronger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shatter"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Discard a Stadium in play."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card