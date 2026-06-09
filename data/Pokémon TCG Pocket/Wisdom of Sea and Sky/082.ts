import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Xatu",
		fr: "Xatu"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [178],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Natu"
	},

	description: {
		en: "They say that it stays still and quiet because it is\nseeing both the past and future at the same time.",
		fr: "On dit qu'il reste immobile et silencieux parce qu'il observe simultanément le passé et le futur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Life Drain",
			fr: "Perte d'Énergie"
		},

		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon's remaining HP is now 10.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire a maintenant 10 PV restants."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card