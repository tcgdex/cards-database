import { Card } from 'models/database/card'
import Set from '../Stormfront'

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

	effect: {
		'en-us': "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).",
		'fr-fr': "Retirez à 1 de vos Pokémon 2 marqueurs de dégât (retirez-en 1 si ce Pokémon n'en possède qu'1).",
		'de-de': "Entferne 2 Schadensmarken von 1 deiner Pokémon (1 falls dieses Pokémon nur 1 hat)."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278390,
		tcgplayer: 88346
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
