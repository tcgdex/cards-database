import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Growing Grass Energy",
		fr: "Énergie Grass Croissante",
		es: "Energía Grass Creciente",
		'es-mx': "Energía Grass Creciente",
		de: "Wachsende Grass-Energie",
		it: "Energia Grass Rigogliosa",
		pt: "Energia Grass Crescente"
	},

	rarity: "Rare",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {G} Energy.\nThe {G} Pokémon this card is attached to gets +20 HP.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {G}.\nLe Pokémon {G} auquel cette carte est attachée a +20 PV.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {G}.\nEl Pokémon {G} al que esté unida esta carta obtiene 20 PS más.",
		'es-mx': "Mientras esta carta esté unida a un Pokémon, proporciona Energía {G}.\nEl Pokémon {G} al que esté unida esta carta obtiene 20 PS más.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {G}-Energie.\nDas {G}-Pokémon, an das diese Karte angelegt ist, erhält +20 KP.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {G}.\nIl Pokémon {G} a cui è assegnata questa carta ha 20 PS in più.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {G}.\nO Pokémon {G} ao qual esta carta está ligada recebe +20 PS."
	},

	energyType: "Normal",
	regulationMark: "J"
}

export default card