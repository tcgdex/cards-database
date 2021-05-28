import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tool Jammer",
		fr: "Bloqueur d’Outil"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "As long as the Pokémon this card is attached to is in the Active Spot, Pokémon Tools attached to your opponent’s Active Pokémon have no effect, except for Tool Jammer.",
		fr: "Tant que le Pokémon auquel cette carte est attachée est sur le Poste Actif, les Outils Pokémon attachés au Pokémon Actif de votre adversaire n’ont aucun effet, à l’exception de Bloqueur d’Outil."
	},

	trainerType: "Tool",
	regulationMark: "E"
}

export default card