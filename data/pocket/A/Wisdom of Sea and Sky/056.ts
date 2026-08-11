import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Octillery",
		fr: "Octillery"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [224],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Remoraid"
	},

	description: {
		en: "Its instinct is to bury itself in holes. It often steals\nthe nesting holes of others to sleep in them.",
		fr: "Il adore se cacher dans des trous. Il n'hésite pas à s'approprier les trous creusés par d'autres Pokémon pour y dormir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Octazooka",
			fr: "Octazooka"
		},

		damage: 50,
		cost: ["Water", "Water"],

		effect: {
			en: "If the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen. This effect lasts until the Defending Pokémon leaves the Active Spot, and it doesn't stack.",
			fr: "Si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée. Cet effet s'applique jusqu'à ce que le Pokémon Défenseur quitte le Poste Actif, et il ne se cumule pas."
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