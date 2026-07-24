import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Charity"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Charity to your Active Pokémon. Unless that Pokémon gets Knocked Out, return Charity to your hand at the end of your turn. If that Pokémon attacks and does damage to the Defending Pokémon, you may reduce that damage by any amount (rounded to the nearest 10)."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 84182,
				cardmarket: 274235
			}
		}
	]
}

export default card

