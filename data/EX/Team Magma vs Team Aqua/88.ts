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
		en: "Double Rainbow Energy can be attached only to an Evolved Pokémon (excluding Pokémon-ex). While in play, Double Rainbow Energy provides every type of Energy but provides 2 Energy at a time. (Doesn't count as a basic Energy when not in play and has no effect other than providing Energy.) Damage done to your opponent's Pokémon by the Pokémon Double Rainbow Energy is attached to is reduced by 10 (after applying Weakness and Resistance). When the Pokémon Double Rainbow Energy is attached to is no longer an Evolved Pokémon, discard Double Rainbow Energy.",
		de: "Die Doppel-Regenbogen-Energie kann nur an ein entwickeltes Pokémon angelegt werden (außer Pokémon-ex). Solange sie im Spiel ist, liefert die Doppel-Regenbogen-Energie jeden Typ von Energie, aber nur 2 Energien auf einmal. (Solange nicht im Spiel, zählt sie nicht als Basisenergiekarte und hat keinen anderen Effekt, als Energie zu liefern.) Jeglicher Schaden, der dem verteidigenden Pokémon zugefügt wird, wird um 10 verringert (nachdem Schwäche und Resistenz verrechnet wurden). Wenn das Pokémon, das die Doppel-Regenbogen-Energie trägt, kein entwickeltes Pokémon mehr sein sollte, lege diese Karte ab."
	},

	thirdParty: {
		cardmarket: 276065,
		tcgplayer: 84895
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
