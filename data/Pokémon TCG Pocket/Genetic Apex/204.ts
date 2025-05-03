import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Horn Attack"
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed.",
	}
}

export default card
