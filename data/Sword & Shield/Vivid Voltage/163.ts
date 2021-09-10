import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Coating Metal Energy",
		fr: "Énergie Metal Revêtement",
		es: "Energía Metal Recubrimiento",
		it: "Energia Metal Protettiva",
		pt: "Energia Metal Revestida",
		de: "Schicht-Metal-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Metal Energy.\nThe Metal Pokémon this card is attached to has no Weakness.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Metal.\n \n\nLe Pokémon Metal auquel cette carte est attachée n’a pas de Faiblesse.\n ",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Metal. \n\nEl Pokémon Metal al que\n esté unida esta carta no tiene Debilidad.\n ",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Metal.\n \nIl Pokémon Metal a cui è assegnata questa carta non ha debolezza.\n\n ",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Metal.\n \nO Pokémon Metal ao qual esta carta está ligada não tem Fraqueza.\n\n ",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Metal-Energie.\n\nDas Metal-Pokémon, an das diese Karte angelegt ist, hat keine Schwäche.\n\n "
	},

	energyType: "Special",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
