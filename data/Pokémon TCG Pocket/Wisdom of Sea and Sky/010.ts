import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Meganium"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Bayleef"
	},

	description: {
		en: "The aroma that rises from its petals contains a\nsubstance that calms aggressive feelings."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Bloomshine"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "Heal 20 damage from each of your Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card