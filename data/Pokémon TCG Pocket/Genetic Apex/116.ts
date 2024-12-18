import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kadabra"
	},

	illustrator: "Ken Sugimori",
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
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Abra",
	}
}

export default card
