import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Omastar"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Ancient Whirlpool"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't attack"
		},

		damage: "70"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
		es: "Omanyte",
		it: "Omanyte",
		pt: "Omanyte",
		de: "Amonitas"
	}
}

export default card
