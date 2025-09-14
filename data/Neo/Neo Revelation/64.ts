import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Old Rod",
		fr: "Canne",
		de: "Angel"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez 2 pièces. Si vous obtenez 2 faces, placez un Bébé Pokémon, un Pokémon de base ou une carte Évolution de votre pile de défausse dans votre main. Si vous obtenez deux piles, placez une carte Dresseur de votre pile de défausse dans votre main.",
		de: "Flip 2 coins. If both are heads, put a Baby Pokémon, Basic Pokémon, or Evolution card from your discard pile into your hand. If both are tails, put a Trainer card from your discard pile into your hand."
	},

	thirdParty: {
		cardmarket: 274650,
		tcgplayer: 87851
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

