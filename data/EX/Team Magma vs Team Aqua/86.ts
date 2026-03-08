import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Aqua Energy",
		fr: "Énergie Magma",
		de: "Aqua-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Aqua Energy can be attached only to a Pokémon with Team Aqua in its name. Aqua Energy provides  and /or  Energy but provied 2 Energy at a time. (Doesn't count as a basci Energy card wehn not in play and has no effect other than providing Energy.) At the end of your turn, discard Aqua Energy."
	},

	thirdParty: {
		cardmarket: 276063,
		tcgplayer: 83565
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
