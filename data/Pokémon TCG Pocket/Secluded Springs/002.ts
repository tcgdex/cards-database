import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Skiploom"
	},

	illustrator: "Dsuke",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 60,
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
			en: "Bounce"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card