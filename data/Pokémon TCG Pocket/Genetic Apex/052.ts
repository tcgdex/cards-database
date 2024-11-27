import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch"
	},

	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Fire Blast"
		},

		effect: {
			en: "Discard a R Energy from this Pokémon."
		},

		damage: "130"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
