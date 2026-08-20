import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom",
		fr: "Capidextre"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [424],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Aipom",
		fr: "Capumain"
	},

	description: {
		en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you.",
		fr: "Il utilise toujours ses deux queues pour faire la moindre tâche. Il s'en sert aussi pour enlacer les gens qu'il affectionne tout particulièrement."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Excited Tail",
			fr: "Queue Énergique"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads. If this Pokémon has Lucky Mittens attached, flip 4 coins instead.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face. Si une carte Moufles Chance est attachée à ce Pokémon, lancez 4 pièces à la place."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card