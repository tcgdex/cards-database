import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Blissey"
	},

	illustrator: "Mizue",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Chansey"
	},

	description: {
		en: "Anyone who takes even one taste of Blissey's\negg becomes unfailingly caring and pleasant\nto everyone."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Energy Blow"
		},

		damage: 20,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card