import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 2 of the other cards in your hand in order to play this card. If this turn's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), and if the attacking Pokémon has Misty in its name, the attack does 20 more damage to the Defending Pokémon."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87524,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87524,
				cardmarket: 274154
			}
		}
	],
}

export default card

