import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Seadra"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Water Arrow"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon."
		}
	}],

	retreat: 1,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
		es: "Horsea",
		it: "Horsea",
		pt: "Horsea",
		de: "Seeper"
	}
}

export default card
