import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Suicune ex",
		fr: "Suicune-ex"
	},

	illustrator: "mele",
	rarity: "Three Star",
	category: "Pokemon",

	dexId: [245],
	hp: 140,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Legendary Pulse",
			fr: "Battement Légendaire"
		},

		effect: {
			en: "At the end of your turn, if this Pokémon is in the Active Spot, draw a card.",
			fr: "À la fin de votre tour, si ce Pokémon est sur le Poste Actif, piochez une carte."
		}
	}],

	attacks: [{
		name: {
			en: "Crystal Waltz",
			fr: "Valse de Cristal"
		},

		damage: 20,
		cost: ["Water", "Water"],

		effect: {
			en: "This attack does 20 damage for each Benched Pokémon (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card