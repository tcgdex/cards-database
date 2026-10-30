import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Meowscarada ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [908],
	hp: 320,
	types: ["Grass"],
	stage: "Stage2",

	evolveFrom: {
		en: "Floragato"
	},
	suffix: "ex",

	attacks: [{
		name: {
			en: "Magical Bullet"
		},

		cost: ["Grass", "Grass"],

		effect: {
			en: "This attack also does 120 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{ type: "holo" }
	],
}

export default card
