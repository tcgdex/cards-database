import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Miltank"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		en: "Miltank produces highly nutritious milk, so it's\nbeen supporting the lives of people and other\nPokémon since ancient times."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rolling Frenzy"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Until this Pokémon leaves the Active Spot, this Pokémon's Rolling Frenzy attack does +30 damage. This effect stacks."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card