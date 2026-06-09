import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Ninja Trick",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Koga's Ninja Trick to your Active Pokémon with Koga in its name. If this Pokémon goes to your Bench, discard this card. When your opponent attacks, you may switch this Pokémon with 1 of your Benched Pokémon (before damage or other effects of attacks).",
	},
	thirdParty: {
		cardmarket: 274383,
		tcgplayer: 86514
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
