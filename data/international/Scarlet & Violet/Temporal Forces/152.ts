import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hero's Cape",
		'fr-fr': "Cape Héroïque",
		'es-es': "Capa de Héroes",
		'it-it': "Mantello dell'Eroe",
		'pt-br': "Capa de Herói",
		'de-de': "Heldenumhang"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "The Pokémon this card is attached to gets +100 HP.",
		'fr-fr': "Le Pokémon auquel cette carte est attachée reçoit +100 PV.",
		'es-es': "El Pokémon al que esté unida esta carta obtiene 100 PS más.",
		'it-it': "Il Pokémon a cui è assegnata questa carta ha 100 PS in più.",
		'pt-br': "O Pokémon ao qual esta carta está ligada recebe 100 PS a mais.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, erhält +100 KP."
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760782,
				tcgplayer: 542667
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "Toyste Beach",

}

export default card