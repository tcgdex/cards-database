import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Zzzap",
				fr: "Zzzap"
			},
			effect: {
				en: "Does 20 damage to each Pokémon in play that has a Pokémon Power. Don't apply Weakness and Resistance.",
				fr: "Inflige 20 dégâts à chaque Pokémon en jeu possédant un Pouvoir Pokémon. Ne pas appliquer la Faiblesse et la Résistance."
			},

		},
	],

	description: {
		fr: "Bien qu'il soit très petit, il peut électrocuter un adulte. Cependant, s'il le fait, il se surprend lui-même."
	}
}

export default card
