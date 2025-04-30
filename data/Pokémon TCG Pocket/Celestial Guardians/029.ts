import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Talonflame"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Fletchinder"
	},

	description: {
		en: "It has top-notch flying capabilities. It flies around easily, even while carrying prey that weighs more than 220 lbs."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Fire Wing"
		},

		damage: 90,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card