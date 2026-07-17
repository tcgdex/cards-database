import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Voltaic Lightning Energy",
		fr: "Énergie Électrique Voltaïque",
		es: "Energía Voltaica",
		'es-mx': "Energía Voltaica",
		de: "Voltaische Elektro-Energie"
	},

	rarity: "Rare",
	category: "Energy",
	energyType: "Special",
	regulationMark: "J",

	effect: {
		en: "While attached to a Pokémon, this card provides 1 Lightning Energy. Attacks used by the Lightning Pokémon this card is attached to deal 20 more damage to your opponent's Active Pokémon.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {L}-Energie.\n\nDie eingesetzten Attacken des {L}-Pokémon, an das diese Karte angelegt ist, fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895868,
				tcgplayer: 704841
			}
		},
	],
}

export default card
