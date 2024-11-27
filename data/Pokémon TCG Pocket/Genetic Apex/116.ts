import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kadabra"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Super Psy Bolt"
		},

		damage: "60"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
