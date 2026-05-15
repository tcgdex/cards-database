import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Lt. Surge's Secret Plan",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put 1 card from your hand face down onto your Bench. (You can't play this card if your Bench is full.) Treat that card as a Basic Pokémon as long as it's face down. Flip the card if either player needs to know what it is in order to use an attack, a Pokémon Power, or a Trainer card. Flip the card if it ever uses an attack or Pokémon Power, evolves, retreats, is damaged by an attack, or is otherwise affected by an attack. At any time during your turn, you may flip the card over. When you flip that card over, if it isn't a Basic Pokémon, discard it and all cards attached to it.",
	},
	thirdParty: {
		cardmarket: 274375,
		tcgplayer: 86867
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
	]
}

export default card
