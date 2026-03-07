import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Meganium",
		fr: "Méganium"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [154],
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Bayleef"
	},

	description: {
		en: "The aroma that rises from its petals contains a\nsubstance that calms aggressive feelings.",
		fr: "L'arôme qui émane de ses pétales contient une substance qui calme les pulsions agressives."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Bloomshine",
			fr: "Éclobrillance"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "Heal 20 damage from each of your Pokémon.",
			fr: "Soignez 20 dégâts de chacun de vos Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lugia"]
}

export default card