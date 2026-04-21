import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "δ Rainbow Energy",
		fr: "δ Rainbow Energy"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "δ Rainbow Energy provides Colorless Energy. While attached to a Pokémon that has δ on its card, δ Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.)",
		fr: "Énergie Multicolore δ fournit de l'Énergie . Lorsqu'elle est attachée à un Pokémon possédant le symbole δ, elle fournit tous les types d'Énergie mais seulement 1 Énergie à la fois. (Elle n'a pas d'autre effet que de fournir de l'Énergie.)"
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
