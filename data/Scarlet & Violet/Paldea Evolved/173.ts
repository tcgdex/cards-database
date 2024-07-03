import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Amulette Bravoure",
		en: "Bravery Charm",
		es: "Amuleto de Bravura",
		it: "Amuleto del Coraggio",
		pt: "Pingente de Bravura",
		de: "Amulett der Tapferkeit"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Le Pokémon de base auquel cette carte est attachée reçoit +50 PV.",
		en: "The Basic Pokémon this card is attached to gets +50 HP.",
		es: "El Pokémon Básico al que esté unida esta carta obtiene 50 PS más.",
		it: "Il Pokémon Base a cui è assegnata questa carta ha 50 PS in più.",
		pt: "O Pokémon Básico ao qual esta carta está ligada recebe 50 PS a mais.",
		de: "Das Basis-Pokémon, an das diese Karte angelegt ist, erhält +50 KP."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card