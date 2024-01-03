import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie multicolore",
		de: "Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege Regenbogen-Energie an 1 deiner Pokémon an. Solange Regenbogen-Energie im Spiel ist, erzeugt Regenbogen-Energie jeden Energietyp, aber nur 1 Energie auf einmal. (Zählt nicht als Basis-Energiekarte, wenn nicht im Spiel.) Wenn du diese Karte aus deiner Hand an 1 deiner Pokémon anlegst, lege 1 Schadensmarke auf dieses Pokémon."
	}
}

export default card
