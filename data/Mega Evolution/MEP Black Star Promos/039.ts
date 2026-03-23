import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Squirtle",
		fr: "Carapuce"
	},

	illustrator: "Saboteri",
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	dexId: [7],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Bubble",
			fr: "Écume"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "J"
}

export default card
