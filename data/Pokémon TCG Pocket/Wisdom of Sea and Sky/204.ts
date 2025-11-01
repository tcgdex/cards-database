import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Lanturn ex",
		fr: "Lanturn-ex"
	},

	illustrator: "Fujimoto Gold",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Chinchou"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Flashing Signal",
			fr: "Signaux Aveuglants"
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card