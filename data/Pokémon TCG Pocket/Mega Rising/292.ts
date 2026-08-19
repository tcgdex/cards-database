import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres",
		fr: "Sulfura"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [146],
	hp: 100,
	types: ["Fire"],

	description: {
		en: "It's one of the legendary bird Pokémon. When\nMoltres flaps its flaming wings, they glimmer with\na dazzling red glow.",
		fr: "Il s'agit d'un des Pokémon oiseaux légendaires.\\nDes flammes rouges d'une grande beauté\\nétincellent lorsqu'il bat des ailes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sky Attack",
			fr: "Piqué"
		},

		damage: 130,
		cost: ["Fire", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card