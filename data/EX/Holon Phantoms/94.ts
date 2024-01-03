import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
		de: "Finsternis-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Falls das Pokémon, an das Finsternis-Energie angelegt ist, mit einem Angriff Schaden zufügt (bevor Schwäche und Resistenz verrechnet wurden), fügt der Angriff 10 weitere Schadenspunkte zu. Dieser Effekt wirkt nur, wenn die Finsternis-Energie an einem Pokémon vom Typ  oder einem Pokémon, das \"Dunkel\" im Namen hat, angelegt ist. Finsternis-Energie spendet -Energie. (Zählt nicht als Basis-Energiekarte.)"
	}
}

export default card
