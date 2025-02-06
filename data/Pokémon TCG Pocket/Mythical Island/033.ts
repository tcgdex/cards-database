import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Sigilyph"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians' emissaries."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spike Draw"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
