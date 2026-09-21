import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Frogadier"
	},

	illustrator: "Akira Komayama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Froakie"
	},

	description: {
		en: "It can throw bubble-covered pebbles with precise\ncontrol, hitting empty cans up to a hundred feet away."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Water Drip"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card