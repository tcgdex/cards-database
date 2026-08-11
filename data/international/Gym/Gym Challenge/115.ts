import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Ninja Trick"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Koga's Ninja Trick to your Active Pokémon with Koga in its name. If this Pokémon goes to your Bench, discard this card. When your opponent attacks, you may switch this Pokémon with 1 of your Benched Pokémon (before damage or other effects of attacks)."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86514,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86514,
				cardmarket: 274383
			}
		},
	],
}

export default card
