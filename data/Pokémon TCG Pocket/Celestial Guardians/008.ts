import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Trevenant"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Phantump"
	},

	description: {
		en: "People fear it due to a belief that it devours any who try to cut down trees in its forest, but to the Pokémon it shares its woods with, it's kind."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Claw Slash"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card