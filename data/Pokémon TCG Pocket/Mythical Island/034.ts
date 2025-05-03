import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Elgyem"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
