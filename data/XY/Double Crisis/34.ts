import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Double Magma Energy",
		fr: "Double Énergie Magma",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Cette carte ne peut être attachée qu'à un Pokémon de la Team Magma. Défaussez cette carte à la fin du tour pendant lequel vous l'avez attachée.\n\nCette carte ne fournit de l'Énergie FightingFighting que pendant qu'elle est attachée à un Pokémon de la Team Magma.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon de la Team Magma, défaussez cette carte.)",
		en: "This card can only be attached to Team Magma Pokémon. Discard this card at the end of the turn you attached it.\n\nThis card provides FightingFighting Energy only while it is attached to a Team Magma Pokémon.\n\n(If this card is attached to anything other than a Team Magma Pokémon, discard this card.)"
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 282545
	}
}

export default card
