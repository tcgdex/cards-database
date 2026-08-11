import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Potion",
		'fr-fr': "Potion",
		'de-de': "Trank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Remove 2 damage counters from 1 of your Pokémon (1 if that Pokémon has only 1).",
		'fr-fr': "Retirez 2 marqueurs de dégâts d'un de vos Pokémon (1 seul si ce Pokémon n'en a qu'un).",
		'de-de': "Entferne 2 Schadensmarken von einem deiner Pokémon (1, falls dieses Pokémon nur 1 hat)."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88333,
				cardmarket: 275031
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88333,
				cardmarket: 275031
			},
		},
	],
}

export default card
