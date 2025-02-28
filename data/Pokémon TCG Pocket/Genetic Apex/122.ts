import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",
	evolveFrom: {
		en: "Haunter"
	},


	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Bother"
		},

		effect: {
			en: "Your opponent can't use any Supporter cards from their hand during their next turn."
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
	}
}

export default card
