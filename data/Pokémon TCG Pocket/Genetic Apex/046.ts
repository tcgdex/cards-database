import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres",
		fr: "Sulfura"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Sky Attack",
			fr: "Piqué"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
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
		fr: "Il s'agit d'un des Pokémon oiseaux légendaires. Des flammes rouges d'une grande beauté étincellent lorsqu'il bat des ailes."
	}
}

export default card
