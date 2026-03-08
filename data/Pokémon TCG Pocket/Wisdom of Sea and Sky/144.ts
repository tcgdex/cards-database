import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Dunsparce",
		fr: "Insolourdo"
	},

	illustrator: "Kazuma Koda",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [206],
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "It creates mazes in dark locations. When spotted,\nit flees into the ground by digging with its tail.",
		fr: "Il construit des labyrinthes dans les endroits sombres. Si quelqu'un le repère, il fuit en creusant le sol à l'aide de sa queue."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sudden Flash",
			fr: "Flash Surprise"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card