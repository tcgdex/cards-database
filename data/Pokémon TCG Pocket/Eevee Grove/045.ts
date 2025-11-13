import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Purrloin",
		fr: "Chacripan"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Opponents that get drawn in by its adorable\nbehavior come away with stinging scratches from\nits claws and stinging pride from its laughter.",
		fr: "Malheur à qui se laisse berner par ses gestes adorables : une fois les gens à sa portée, il les griffe sans crier gare, en ricanant."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Playful Knockdown",
			fr: "Fausse Maladresse"
		},

		cost: ["Darkness"],

		effect: {
			en: "Discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card