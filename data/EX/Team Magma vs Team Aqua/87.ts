import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Magma Energy",
		fr: "Énergie Magma",
		de: "Magma-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Magma Energy can be attached only to a Pokémon with Team Magma in its name. Magma Energy provides  and /or  Energy but provied 2 Energy at a time. (Doesn't count as a basci Energy card wehn not in play and has no effect other than providing Energy.) At the end of your turn, discard Magma Energy."
	},

	thirdParty: {
		cardmarket: 276064
	}
}

export default card
