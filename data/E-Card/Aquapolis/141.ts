import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Weakness Guard",
		fr: "Garde faiblesse",
		de: "Weakness Guard*"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon. Défaussez-vous en à la fin du prochain tour de votre adversaire.\n\nTant que cette carte est attachée, ce Pokémon n'a pas de Faiblesse.",
		de: "As long as this card is attached, this Pokémon has no Weakness."
	},

	thirdParty: {
		cardmarket: 275217
	}
}

export default card
