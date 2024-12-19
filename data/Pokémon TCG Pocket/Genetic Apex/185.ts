import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonite"
	},

	illustrator: "Hiroyuki Yamamoto",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Stage2",

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
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	}
}

export default card
