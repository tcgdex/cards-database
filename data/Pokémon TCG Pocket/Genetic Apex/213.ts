import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Do the Wave"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon."
		},

		damage: "30x"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	}
}

export default card
