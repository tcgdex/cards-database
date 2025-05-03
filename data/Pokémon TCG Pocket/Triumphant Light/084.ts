import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Garchomp ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
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
			en: "Linear Attack"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon."
		}
	}, {
		name: {
			en: "Dragon Claw"
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