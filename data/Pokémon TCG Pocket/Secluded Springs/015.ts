import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Tentacool",
		fr: "Tentacool"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [72],
	hp: 60,
	types: ["Water"],

	description: {
		en: "Tentacool is not a particularly strong swimmer.\nIt drifts across the surface of shallow seas as it\nsearches for prey.",
		fr: "Peu doué pour la natation, ce Pokémon se contente de flotter à la surface des eaux peu profondes pour chasser ses proies."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin"
		},

		damage: 20,
		cost: ["Water", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card