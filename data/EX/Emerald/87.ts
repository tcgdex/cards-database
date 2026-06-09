import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Double Rainbow Energy",
		fr: "Double Énergie Multicolore",
		de: "Doppelte Regenbogen Energie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Double Rainbow Energy can be attached only to an Evolved Pokémon (excluding Pokémon-ex). While in play, Double Rainbow Energy provides every type of Energy but provides 2 Energy at a time. (Has no effect other than providing Energy.) Damage done to your opponent's Pokémon by the Pokémon Double Rainbow Energy is attached to is reduced by 10 (before applying Weakness and Resistance). When the Pokémon Double Rainbow Energy is attached to is no longer an Evolved Pokémon, discard Double Rainbow Energy.",
		de: "Die Doppel-Regenbogen-Energie kann nur an ein entwickeltes Pokémon angelegt werden (außer Pokémon-ex). Solange sie im Spiel ist, liefert die Doppel-Regenbogen-Energie jeden Typ von Energie, aber nur 2 Energien auf einmal. (Solange nicht im Spiel, zählt sie nicht als Basisenergiekarte und hat keinen anderen Effekt, als Energie zu liefern.) Jeglicher Schaden, der dem verteidigenden Pokémon zugefügt wird, wird um 10 verringert (nachdem Schwäche und Resistenz verrechnet wurden). Wenn das Pokémon, das die Doppel-Regenbogen-Energie trägt, kein entwickeltes Pokémon mehr sein sollte, lege diese Karte ab."
	},

	thirdParty: {
		tcgplayer: 84892,
		cardmarket: 276598
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"]
		}
	]
}

export default card
