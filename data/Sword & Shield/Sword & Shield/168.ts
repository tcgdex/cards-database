import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lum Berry",
		fr: "Baie Prine",
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "At the end of each turn, if the Pokémon this card is attached to is affected by any Special Conditions, it recovers from all of them, and discard this card.",
		fr: "À la fin de chaque tour, si le Pokémon auquel cette carte est attachée est affecté par au moins un État Spécial, il guérit de tous ces États Spéciaux. Ensuite, défaussez cette carte."
	},

	trainerType: "Tool",
	regulationMark: "D"
}

export default card
