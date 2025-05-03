import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Starly"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pluck"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
