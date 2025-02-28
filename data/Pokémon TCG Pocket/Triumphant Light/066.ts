import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Starly"
	},

	illustrator: "Apios",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "They flock around mountains and fields, chasing<br />after bug Pokémon. Their singing is noisy and<br />annoying."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Glide"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card