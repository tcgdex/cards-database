import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Granbull"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Snubbull"
	},

	description: {
		en: "While it has powerful jaws, it doesn't care for\ndisputes, so it rarely has a chance to display\ntheir might."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wild Tackle"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card