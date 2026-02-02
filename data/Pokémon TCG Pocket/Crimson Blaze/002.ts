import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Ivysaur"
	},

	illustrator: "Kanako Eo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Bulbasaur"
	},

	description: {
		en: "The more sunlight Ivysaur bathes in, the more\nstrength wells up within it, allowing the bud\non its back to grow larger."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Synthesis"
		},

		cost: ["Grass"],

		effect: {
			en: "Take 2 {G} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card