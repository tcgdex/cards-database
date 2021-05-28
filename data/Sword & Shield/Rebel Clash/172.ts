import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Horror Psychic Energy",
		fr: "Énergie Psychic Frayeur"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Psychic Energy.\n\nIf the Psychic Pokémon this card is attached to is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Psychic.\n\nSi le Pokémon Psychic auquel cette carte est attachée est sur le Poste Actif et qu’il subit les dégâts d’une attaque d’un adversaire (même s’il est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant."
	},

	energyType: "Special",
	regulationMark: "D"
}

export default card
