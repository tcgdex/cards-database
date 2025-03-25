import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Petilil",
		fr: "Chlorobule"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Blot",
			fr: "Pâté"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon."
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "The leaves on its head grow right back even if they fall out. These bitter leaves refresh those who eat them.",
		fr: "Les feuilles sur sa tête repoussent très vite. Elles sont fort amères, mais elles revigorent les corps les plus éreintés."
	}
}

export default card
