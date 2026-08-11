import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sparkling Crystal",
		'fr-fr': "Cristal Scintillant",
		'es-es': "Cristal Brillante",
		'pt-br': "Cristal Cintilante",
		'it-it': "Cristallo Scintillante",
		'de-de': "Funkelnder Kristall"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "When the Tera Pokémon this card is attached to uses an attack, that attack costs 1 Energy less. (The Energy can be of any type.)",
		'fr-fr': "Lorsque le Pokémon Téracristal auquel cette carte est attachée utilise une attaque, cette attaque-là coûte une Énergie de moins. (Cette Énergie peut être de tout type.)",
		'es-es': "Cuando el Pokémon Teracristal al que está unida esta carta usa un ataque, ese ataque cuesta una Energía menos. (La Energía puede ser de cualquier tipo).",
		'pt-br': "Quando o Pokémon Tera ao qual esta carta está ligada usar um ataque, aquele ataque custará 1 Energia a menos. (A Energia pode ser de qualquer tipo.)",
		'it-it': "Quando il Pokémon Teracristal a cui è assegnata questa carta usa un attacco, quell'attacco costa un'Energia in meno. L'Energia può essere di qualsiasi tipo.",
		'de-de': "Wenn das Terakristall-Pokémon, an das diese Karte angelegt ist, eine Attacke einsetzt, verringern sich die Kosten jener Attacke um 1 Energie. (Die Energie kann beliebigen Typs sein.)"
	},

	trainerType: "Tool",
	regulationMark: "H",

	illustrator: "Toyste Beach",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805523,
				tcgplayer: 610484
			}
		},
	],
}

export default card
