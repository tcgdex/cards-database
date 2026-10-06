import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Floragato"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		en: "Sprigatito"
	},

	attacks: [{
		name: {
			en: "Slash"
		},

		cost: ["Grass", "Grass"],

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "The hardness of Floragato's fur depends on the Pokémon's mood. When Floragato is prepared to battle, its fur becomes pointed and needle sharp."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
