import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Ivysaur"
	},

	illustrator: "Ryuta Fuse",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Bulbasaur"
	},

	description: {
		en: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
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