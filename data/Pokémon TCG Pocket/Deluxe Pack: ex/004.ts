import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Ivysaur"
	},

	illustrator: "Kurata So",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Bulbasaur"
	},

	description: {
		en: "When the bulb on its back grows large, it\nappears to lose the ability to stand on its\nhind legs."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Leaf"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card