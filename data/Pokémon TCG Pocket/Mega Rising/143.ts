import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sandygast",
		fr: "Bacabouh"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [769],
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It flings sand into the eyes of its prey and tries to\nclose in on them while they're blinded, but since\nSandygast is so slow, the prey tends to escape."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sand Attack",
			fr: "Jet de Sable"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card