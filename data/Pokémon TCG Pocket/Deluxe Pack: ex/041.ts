import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Dartrix"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Rowlet"
	},

	description: {
		en: "This narcissistic Pokémon is a clean freak. If you\ndon't groom it diligently, it may stop listening to you."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Wing"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card