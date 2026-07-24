import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Minion of Team Rocket"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip 2 coins. If both of them are heads, choose 1 of your opponent's Benched Pokémon and return it and all cards attached to it to his or her hand. If 1 or both of them are tails, your turn ends immediately (you can't attack this turn)."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87480,
				cardmarket: 274249
			}
		}
	]
}

export default card

