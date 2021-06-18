import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Énergie Chance",
		en: "Lucky Energy"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Colorless.\nSi le Pokémon auquel cette carte est attachée est sur le Poste Actif et qu’il subit les dégâts d’une attaque d’un Pokémon de votre adversaire (même s’il est mis K.O.), piochez une carte.",
		en: "As long as this card is attached to a Pokémon, it provides Colorless Energy.\nIf the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent’s Pokémon (even if it is Knocked Out), draw a card."
	},

	energyType: "Special",
	regulationMark: "E"
}

export default card