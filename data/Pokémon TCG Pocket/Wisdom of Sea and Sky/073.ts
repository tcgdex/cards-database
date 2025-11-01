import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "It is incredibly slow and dopey. It takes five\nseconds for it to feel pain when under attack.",
		fr: "Ce Pokémon est très lent et apathique. Il lui faut cinq secondes pour ressentir la douleur provoquée par une attaque."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rest",
			fr: "Repos"
		},

		cost: ["Colorless"],

		effect: {
			en: "This Pokémon is now Asleep. Heal 30 damage from it.",
			fr: "Ce Pokémon est maintenant Endormi. Soignez 30 dégâts à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card