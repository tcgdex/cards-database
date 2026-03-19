import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Wartortle"
	},

	illustrator: "Taiga Kasai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Squirtle"
	},

	description: {
		en: "It cleverly controls its furry ears and tail to\nmaintain its balance while swimming."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shell Shield"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks."
		}
	}],

	attacks: [{
		name: {
			en: "Waterfall"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card