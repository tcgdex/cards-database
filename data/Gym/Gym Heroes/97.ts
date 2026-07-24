import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Blaine's Quiz #1"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put a Basic Pokémon or Evolution card from your hand face down in front of you and tell your opponent its name. Your opponent guesses the length of that Pokémon. Flip the card over. If your opponent guessed right, he or she draws 2 cards. If your opponent guessed wrong, you draw 2 cards. Either way, return the card to your hand."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83879,
				cardmarket: 274233
			}
		}
	]
}

export default card

