import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Heat Fire Energy",
		fr: "Énergie Fire Chaleur",
		es: "Energía Fire Calor",
		it: "Energia Fire Calore",
		pt: "Energia Fire Incandescente",
		de: "Hitze-Fire-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Fire Energy.\n\nThe Fire Pokémon this card is attached to gets +20 HP.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Fire.\n\nCette carte ajoute 20 PV au Pokémon Fire auquel elle est attachée.",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Fire.\n\nEl Pokémon Fire al que esté unida esta carta obtiene 20 PS más.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Fire.\n\nIl Pokémon Fire a cui è assegnata questa carta ha 20 PS in più.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Fire.\n\nO Pokémon Fire ao qual esta carta está ligada recebe 20 PS a mais.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Fire-Energie.\n\nDas Fire-Pokémon, an das diese Karte angelegt ist, erhält +20 KP."
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
