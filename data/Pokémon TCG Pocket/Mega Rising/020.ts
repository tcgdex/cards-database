import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Virizion"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		en: "It darts around opponents with a flurry of quick\nmovements, slicing them up with its horns."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sacred Sword"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use Sacred Sword."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card