import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golurk"
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Golett"
	},


	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			en: "Double Lariat"
		},

		effect: {
			en: "Flip 2 coins. This attack does 100 damage for each heads."
		},

		damage: "100×"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 4,
	rarity: "Two Diamond",

	description: {
		en: "Artillery platforms built into the walls of ancient castles served as perches from which Golurk could fire energy beams.",
	}
}

export default card
