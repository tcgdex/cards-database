import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie obscurité",
		de: "Finsternis-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Falls das Pokémon, an das die Finsternis-Energie angelegt ist, dem Verteidigenden Pokémon Schadenspunkte zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt der Angriff dem Verteidigenden Pokémon 10 weitere Schadenspunkte zu. Lege am Ende jedes Zugs eine Schadensmarke auf das Pokémon, an das die Finsternis-Energie angelegt ist, falls es nicht vom Typ  ist oder 'Dunkel' im Namen hat. Finsternis-Energie liefert - Energie. (Zählt nicht als Basis-Energiekarte.)"
	},

	thirdParty: {
		cardmarket: 275218,
		tcgplayer: 84696
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
