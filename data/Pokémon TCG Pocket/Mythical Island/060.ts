import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fighting Tackle"
		},

		damage: "40+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon  more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
