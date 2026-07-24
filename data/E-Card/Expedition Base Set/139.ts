import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Power Plant",
		fr: "Double balle",
		de: "Dual Ball*"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each of his or her turns, a player may discard a basic Energy card from his or her hand. If that player does, he or she chooses a basic Energy card from his or her discard pile, shows it to his or her opponent, and then puts it into his or her hand.",
		fr: "Lancez 2 pièces. Pour chaque face, cherchez une carte Pokémon de base dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck.",
		de: "Flip 2 coins. For each heads, search your deck for a Basic Pokémon card other than a Baby Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84984,
				cardmarket: 275014
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
