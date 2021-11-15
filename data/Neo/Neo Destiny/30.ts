import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [X]",
		fr: "Zarbi X"
	},

	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[XXXXX]",
				fr: "XXXXX"
			},
			effect: {
				en: "Whenever 1 of your Pokémon with Unown in its name uses its Hidden Power attack, flip a coin until you get tails. That attack does 10 more damage for each heads. If you have more than 1 Unown X in play, use only 1 [XXXXX] per turn.",
				fr: "Quand un de vos Pokémon Zarbi utilise son attaque Puissance cachée, lancez une pièce jusqu'à obtenir pile. Cette attaque fait 10 dégâts supplémentaires pour chaque face. Si vous avez plus d'un Zarbi [X] en jeu, utilisez seulement 1 [XXXXX] à chaque tour."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	}
}

export default card
