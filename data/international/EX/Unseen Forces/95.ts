import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Potion",
		'fr-fr': "Potion",
		'de-de': "Trank"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).",
		'fr-fr': "Retirez 2 marqueurs de dégât à 1 de vos Pokémon (retirez-en 1 si ce Pokémon n'en possède qu'1).",
		'de-de': "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1)."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88337,
				cardmarket: 276741
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88337,
				cardmarket: 276741
			},
		}
	],
}

export default card
