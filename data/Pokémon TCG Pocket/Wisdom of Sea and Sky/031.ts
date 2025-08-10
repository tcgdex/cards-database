import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Magcargo"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Slugma"
	},

	description: {
		en: "Its brittle shell occasionally spouts intense flames\nthat circulate throughout its body."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spurt Fire"
		},

		cost: ["Fire", "Colorless"],

		effect: {
			en: "1 other Pokémon (either yours or your opponent's) is chosen at random 3 times. For each time a Pokémon was chosen, do 50 damage to it."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card