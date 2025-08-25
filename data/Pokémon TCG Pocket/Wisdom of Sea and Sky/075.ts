import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Smoochum"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "If its face gets even slightly dirty, Smoochum will\nbathe immediately. But if its body gets dirty,\nSmoochum doesn't really seem to care."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shivery Wave"
		},

		damage: 20,

		effect: {
			en: "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["ho-oh"]
}

export default card