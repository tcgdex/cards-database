import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Sparkling Crystal",
		fr: "Cristal Scintillant",
		es: "Cristal Brillante",
		pt: "Cristal Cintilante",
		it: "Cristallo Scintillante",
		de: "Funkelnder Kristall"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		en: "When the Tera Pokémon this card is attached to uses an attack, that attack costs 1 Energy less. (The Energy can be of any type.)",
		fr: "Lorsque le Pokémon Téracristal auquel cette carte est attachée utilise une attaque, cette attaque-là coûte une Énergie de moins. (Cette Énergie peut être de tout type.)",
		es: "Cuando el Pokémon Teracristal al que está unida esta carta usa un ataque, ese ataque cuesta una Energía menos. (La Energía puede ser de cualquier tipo).",
		pt: "Quando o Pokémon Tera ao qual esta carta está ligada usar um ataque, aquele ataque custará 1 Energia a menos. (A Energia pode ser de qualquer tipo.)",
		it: "Quando il Pokémon Teracristal a cui è assegnata questa carta usa un attacco, quell'attacco costa un'Energia in meno. L'Energia può essere di qualsiasi tipo.",
		de: "Wenn das Terakristall-Pokémon, an das diese Karte angelegt ist, eine Attacke einsetzt, verringern sich die Kosten jener Attacke um 1 Energie. (Die Energie kann beliebigen Typs sein.)"
	},

	trainerType: "Tool",
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Toyste Beach"
}

export default card