import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sitrus Berry",
		fr: "Baie Sitrus"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "At the end of each turn, if the Pokémon this card is attached to has half of its maximum HP or less remaining, heal 30 damage from it. If you do, discard this card.",
		fr: "À la fin de chaque tour, s'il reste la moitié des PV max ou moins au Pokémon auquel cette carte est attachée, soignez 30 dégâts de ce Pokémon. Dans ce cas, défaussez cette carte."
	},

	trainerType: "Tool",

	boosters: ["mega-altaria"]
}

export default card