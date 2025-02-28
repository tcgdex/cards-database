import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Sizzlipede"
	},


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
	rarity: "Two Diamond",

	description: {
		en: "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.",
	}
}

export default card
