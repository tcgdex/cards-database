import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Fearow"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Spearow"
	},

	description: {
		en: "Carrying food through Fearow's territory is\ndangerous. It will snatch the food away from\nyou in a flash!"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Peck Bugs"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card