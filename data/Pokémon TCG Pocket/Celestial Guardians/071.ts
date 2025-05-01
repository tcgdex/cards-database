import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Spoink"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Spoink will die if it stops bouncing. The pearl on its head amplifies its psychic powers."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psycharge"
		},

		cost: ["Psychic"],

		effect: {
			en: "Take a Psychic Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
