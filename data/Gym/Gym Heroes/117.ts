import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Sabrina's ESP"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Sabrina's ESP to 1 of your Pokémon with Sabrina in its name. At the end of your turn, discard Sabrina's ESP. If that Pokémon uses and attack that involves flipping coins, Sabrina's ESP lets you re-flip those coins once. If you do, re-flip all the coins."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88869,
				cardmarket: 274253
			}
		}
	]
}

export default card

