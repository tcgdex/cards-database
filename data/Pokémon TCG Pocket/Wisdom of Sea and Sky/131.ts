import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey",
		fr: "Leveinard"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [113],
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "This kindly Pokémon lays highly nutritious eggs\nand shares them with injured Pokémon or people.",
		fr: "Ce Pokémon très serviable distribue ses œufs hautement nutritifs aux êtres humains et aux Pokémon blessés."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scrunch",
			fr: "Compresse"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card