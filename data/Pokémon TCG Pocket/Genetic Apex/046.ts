import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Sky Attack"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing"
		},

		damage: "130"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
	}
}

export default card
