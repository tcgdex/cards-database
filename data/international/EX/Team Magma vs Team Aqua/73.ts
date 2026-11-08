import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Maxie",
		'fr-fr': "Max",
		'de-de': "Marc"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your hand or discard pile for a Pokémon with Team Magma in its name and put it onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon. If it is a Stage 2 Pokémon, put 2 damage counters on that Pokémon.",
		'fr-fr': "Cherchez dans votre main ou votre pile de défausse un Pokémon dont le nom comporte Team Magma et placez-le sur votre Banc. Traitez le nouveau Pokémon de Banc comme un Pokémon de base. Si c'est un Pokémon de niveau 2, placez 2 marqueurs de dégât sur ce Pokémon.",
		'de-de': "Durchsuche dein Deck nach einem Pokémon mit"
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275850,
				tcgplayer: 87270
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275850,
				tcgplayer: 87270
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871873,
				tcgplayer: 477404
			}
		}
	],

	retreat: 0
}

export default card
