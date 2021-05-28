import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sitrus Berry",
		fr: "Baie Sitrus",
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "At the end of each turn, if the Pokémon this card is attached to has 3 or more damage counters on it, heal 30 damage from it and discard this card.",
		fr: "À la fin de chaque tour, si le Pokémon auquel cette carte est attachée a au moins 3 marqueurs de dégâts, soignez 30 de ses dégâts, puis défaussez cette carte."
	},

	trainerType: "Tool",
	regulationMark: "D"
}

export default card
