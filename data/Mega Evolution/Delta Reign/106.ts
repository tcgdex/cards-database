import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		fr: "Caninos"
	},

	illustrator: "Yoshimoto Yoshimon",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [58],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			fr: "Hurlement"
		},

		cost: ["Colorless"],

		effect: {
			fr: "Envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)"
		}
	}, {
		name: {
			fr: "Ruade"
		},

		cost: ["Fire", "Colorless", "Colorless"],

		damage: 50
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	description: {
		fr: "Ce Pokémon est particulièrement affectueux et loyal. Il aboie et mord pour se débarrasser de ses adversaires."
	},

	variants: [
		{ type: "holo" }
	],
}

export default card
