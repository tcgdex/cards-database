import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Alakazam"
	},

	illustrator: "Akira Egawa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",
	evolveFrom: {
		en: "Kadabra"
	},

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psychic"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		},

		damage: "60+"
	}],

	retreat: 2,
	rarity: "One Star",
	boosters: [Charizard]
}

export default card
