import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Burning Energy",
		fr: "Énergie Combustion",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",

	set: Set,











	effect: {
		fr: "Cette carte ne peut être attachée qu'à un Pokémon Fire. Cette carte ne fournit de l'Énergie Fire que pendant qu'elle est attachée à un Pokémon Fire.\n\nSi cette carte est défaussée par une attaque du Pokémon Fire auquel cette carte est attachée, attachez cette carte de votre pile de défausse au Pokémon après votre attaque.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Fire, défaussez cette carte.)",
		en: "This card can only be attached to Fire Pokémon. This card provides Fire Energy only while this card is attached to a Fire Pokémon.\n\nIf this card is discarded by an attack of the Fire Pokémon this card is attached to, attach this card from your discard pile to that Pokémon after attacking.\n\n(If this card is attached to anything other than a Fire Pokémon, discard this card.)"
	},

energyType: "Special",
}

export default card
