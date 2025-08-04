import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Mamoswine"
	},

	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Piloswine"
	},

	description: {
		en: "This Pokémon can be spotted in wall paintings\nfrom as far back as 10,000 years ago. For a\nwhile, it was thought to have gone extinct."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Earthquake"
		},

		damage: 160,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card