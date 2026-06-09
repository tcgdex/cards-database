import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "During this turn, instead of attaching your free Energy card, you may instead attach 2 Fire Energy cards to 1 of your Pokémon with Blaine in its name. (Playing additional copies of this card this turn has no effect.)",
	},
	thirdParty: {
		cardmarket: 274285,
		tcgplayer: 83859
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
