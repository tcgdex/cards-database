import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Old Rod",
		'fr-fr': "Canne",
		'de-de': "Angel"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip 2 coins. If both are heads, put a Baby Pokémon, Basic Pokémon, or Evolution card from your discard pile into your hand. If both are tails, put a Trainer card from your discard pile into your hand.",
		'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 faces, placez un Bébé Pokémon, un Pokémon de base ou une carte Évolution de votre pile de défausse dans votre main. Si vous obtenez deux piles, placez une carte Dresseur de votre pile de défausse dans votre main.",
		'de-de': "Flip 2 coins. If both are heads, put a Baby Pokémon, Basic Pokémon, or Evolution card from your discard pile into your hand. If both are tails, put a Trainer card from your discard pile into your hand."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274650,
				tcgplayer: 87851
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274650,
				tcgplayer: 87851
			}
		}
	]
}

export default card

