import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Galvantula",
		fr: "Mygavolt"
	},

	illustrator: "otumami",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [596],
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Joltik"
	},

	description: {
		en: "It launches electrified fur from its abdomen as its\nmeans of attack. Opponents hit by the fur could\nbe in for three full days and nights of paralysis.",
		fr: "Il attaque en projetant les poils de son abdomen chargés en électricité. La victime reste alors paralysée pendant trois jours et trois nuits."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electric Shock",
			fr: "Choc Électrique"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card