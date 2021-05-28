import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Twin Energy",
		fr: "Énergie Jumelée"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon that isn't a Pokémon V or a Pokémon-GX, it provides ColorlessColorless Energy. \n\nIf this card is attached to a Pokémon V or a Pokémon-GX, it provides Colorless Energy instead.",
		fr: "Tant que cette carte est attachée à un Pokémon qui n’est ni un Pokémon-V ni un Pokémon-GX, elle fournit 2 Énergies Colorless. \n\nSi cette carte est attachée à un Pokémon-V ou à un Pokémon-GX, elle ne fournit qu’une Énergie Colorless."
	},

	energyType: "Special",
	regulationMark: "D"
}

export default card
