import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Mantine",
		fr: "Démanta"
	},

	illustrator: "0313",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [226],
	hp: 100,
	types: ["Water"],

	description: {
		en: "While elegantly swimming in the sea, it ignores\nRemoraid that cling to its fins seeking food scraps.",
		fr: "Il ignore royalement les Rémoraid qui s'accrochent à ses nageoires pour manger les restes qu'il sème."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dive",
			fr: "Plongée"
		},

		damage: 80,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card