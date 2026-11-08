import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Amulette Bravoure",
		'en-us': "Bravery Charm",
		'es-es': "Amuleto de Bravura",
		'it-it': "Amuleto del Coraggio",
		'pt-br': "Pingente de Bravura",
		'de-de': "Amulett der Tapferkeit"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Le Pokémon de base auquel cette carte est attachée reçoit +50 PV.",
		'en-us': "The Basic Pokémon this card is attached to gets +50 HP.",
		'es-es': "El Pokémon Básico al que esté unida esta carta obtiene 50 PS más.",
		'it-it': "Il Pokémon Base a cui è assegnata questa carta ha 50 PS in più.",
		'pt-br': "O Pokémon Básico ao qual esta carta está ligada recebe 50 PS a mais.",
		'de-de': "Das Basis-Pokémon, an das diese Karte angelegt ist, erhält +50 KP."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715648,
				tcgplayer: 497545,
				cardtrader: 248826
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715648,
				tcgplayer: 497545,
				cardtrader: 248826
			}
		},
	],

	illustrator: "Toyste Beach",

	
}

export default card
