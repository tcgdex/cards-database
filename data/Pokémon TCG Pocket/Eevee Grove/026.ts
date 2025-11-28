import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Joltik",
		fr: "Statitik"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [595],
	hp: 40,
	types: ["Lightning"],

	description: {
		en: "Joltik can be found clinging to other Pokémon.\nIt's soaking up static electricity because it can't\nproduce a charge on its own.",
		fr: "Il s'accroche au corps des autres Pokémon pour absorber leur électricité statique. Il est incapable d'en produire tout seul."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Jolt",
			fr: "Secousse"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card