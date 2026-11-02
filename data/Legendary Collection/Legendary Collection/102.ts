import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Pokémon Breeder"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can play this card only when you would be allowed to evolve that Pokémon anyway."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274867,
				tcgplayer: 88207
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274867,
				tcgplayer: 88207
			}
		}
	],

	retreat: 0
}

export default card
