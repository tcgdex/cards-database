import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Garchomp ex",
		fr: "Carchacrok-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gabite"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Linear Attack",
			fr: "Attaque Linéaire"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire."
		}
	}, {
		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
