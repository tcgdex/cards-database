import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonite"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Stage2",
	evolveFrom: {
		en: "Dragonair"
	},

	attacks: [{
		cost: ["Water", "Lightning", "Colorless", "Colorless"],

		name: {
			en: "Draco Meteor"
		},

		effect: {
			en: "1 of your opponent's Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 50 damage to it."
		}
	}],

	retreat: 3,
	rarity: "One Star",

	description: {
		en: "It is said that somewhere in the ocean lies an island where these gather. Only they live there.",
	}
}

export default card
