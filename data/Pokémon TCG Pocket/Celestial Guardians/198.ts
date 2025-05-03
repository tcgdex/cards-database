import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Decidueye ex"
	},

	illustrator: "Takumi Wada",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		en: "Dartrix"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Pierce the Pain"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 100 damage to 1 of your opponent's Pokémon that have damage on them."
		}
	}, {
		name: {
			en: "Razor Leaf"
		},

		damage: 80,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card