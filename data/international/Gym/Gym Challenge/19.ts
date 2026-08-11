import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "If an attack from a Pokémon with Koga in its name does damage to a Defending Pokémon this turn, that Pokémon is then Poisoned."
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86502,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86502,
				cardmarket: 274287
			}
		},
	],
}

export default card
