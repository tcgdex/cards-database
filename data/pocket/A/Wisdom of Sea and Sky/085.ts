import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Unown",
		fr: "Zarbi"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [201],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Its flat, thin body is always stuck on walls. Its shape\nappears to have some meaning.",
		fr: "Son corps plat et fin est toujours collé aux murs. On pense que sa forme a une signification."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "POWER",
			fr: "POWER"
		},

		effect: {
			en: "This Ability works if you have any Unown in play with an Ability other than . Attacks used by your Pokémon do +10 damage to your opponent's Active Pokémon.",
			fr: "Ce talent s'active si vous avez une carte Zarbi en jeu avec un talent autre que Power. Les attaques de vos Pokémon infligent + 10 dégâts au Pokémon Actif de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Hidden Power",
			fr: "Puissance Cachée"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card