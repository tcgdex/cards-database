import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Brock's Protection"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Brock's Protection to 1 of your Pokémon with Brock in its name. Energy cards attached to that Pokémon can't be removed by your opponent's attacks or Trainer cards. (This doesn't stop the rest of the attack or Trainer card from working normally.)"
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83977,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83977,
				cardmarket: 274369
			}
		},
	],
}

export default card
