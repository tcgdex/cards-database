import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Lilligant"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Leaf Supply"
		},

		effect: {
			en: "Take a G Energy from your Energy Zone and attach it to 1 of your Benched G Pokémon."
		},

		damage: "50"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
		es: "Petilil",
		it: "Petilil",
		pt: "Petilil",
		de: "Lilminip"
	}
}

export default card
