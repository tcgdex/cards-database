import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Double Rainbow Energy",
		fr: "Double Énergie Multicolore",
		de: "Doppel-Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Die Doppel-Regenbogen-Energie kann nur an ein entwickeltes Pokémon angelegt werden (außer Pokémon-ex). Solange sie im Spiel ist, liefert die Doppel-Regenbogen-Energie jeden Typ von Energie, aber nur 2 Energien auf einmal. (Solange nicht im Spiel, zählt sie nicht als Basisenergiekarte und hat keinen anderen Effekt, als Energie zu liefern.) Jeglicher Schaden, der dem verteidigenden Pokémon zugefügt wird, wird um 10 verringert (nachdem Schwäche und Resistenz verrechnet wurden). Wenn das Pokémon, das die Doppel-Regenbogen-Energie trägt, kein entwickeltes Pokémon mehr sein sollte, lege diese Karte ab."
	},

	thirdParty: {
		cardmarket: 276065,
		tcgplayer: 84895
	}
}

export default card
