import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Hariyama"
	},

	illustrator: "Miki Tanaka",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Makuhita"
	},

	description: {
		en: "It loves challenging others to tests of strength. It has the power to stop a train with a slap."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Push Out"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3
}

export default card