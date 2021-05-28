import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Rapid Strike Energy",
		fr: "Énergie Mille Poings"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "This card can only be attached to a Rapid Strike Pokémon. If this card is attached to anything other than a Rapid Strike Pokémon, discard this card.\nAs long as this card is attached to a Pokémon, it provides 2 in any combination of Water Energy and Fighting Energy.",
		fr: "Cette carte ne peut être attachée qu’à un Pokémon Mille Poings. Si cette carte est attachée à autre chose qu’un Pokémon Mille Poings, défaussez-la.\nTant que cette carte est attachée à un Pokémon, elle fournit une combinaison de 2 cartes Énergie Water et Énergie Fighting."
	},

	energyType: "Special"
}

export default card