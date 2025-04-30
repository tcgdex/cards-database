import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Heliolisk"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Helioptile"
	},

	description: {
		en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rear Kick"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card