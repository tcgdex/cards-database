import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Skiploom"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		en: "Hoppip"
	},

	description: {
		en: "Skiploom enthusiasts can apparently tell where a\nSkiploom was born by the scent drifting from the\nflower on the Pokémon's head."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Seed Bomb"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card