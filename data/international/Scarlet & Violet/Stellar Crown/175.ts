import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bravery Charm",
		'fr-fr': "Amulette Bravoure",
		'es-es': "Amuleto de Bravura",
		'it-it': "Amuleto del Coraggio",
		'pt-br': "Pingente de Bravura",
		'de-de': "Amulett der Tapferkeit"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'en-us': "The Basic Pokémon this card is attached to gets +50 HP.",
		'fr-fr': "Le Pokémon de base auquel cette carte est attachée reçoit +50 PV.",
		'es-es': "El Pokémon Básico al que esté unida esta carta obtiene 50 PS más.",
		'it-it': "Il Pokémon Base a cui è assegnata questa carta ha 50 PS in più.",
		'pt-br': "O Pokémon Básico ao qual esta carta está ligada recebe 50 PS a mais.",
		'de-de': "Das Basis-Pokémon, an das diese Karte angelegt ist, erhält +50 KP."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			foil: "gold",
			thirdParty: {
				cardmarket: 786029,
				tcgplayer: 567491
			}
		},
	],

	illustrator: "Toyste Beach",

}

export default card
