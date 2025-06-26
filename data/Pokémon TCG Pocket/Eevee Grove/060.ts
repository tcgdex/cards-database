import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "It mimics the cries of other Pokémon to trick them\ninto thinking it's one of them. This way they won't\nattack it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tone-Deaf"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card