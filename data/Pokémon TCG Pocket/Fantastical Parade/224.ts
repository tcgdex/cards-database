import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros"
	},

	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "When Tauros begins whipping itself with its tails,\nit's a warning that the Pokémon is about to\ncharge with astounding speed."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fighting Tackle"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card