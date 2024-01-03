import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Multi Energy",
		fr: "Énergies multiples",
		de: "Multi-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege die Multienergiekarte an eines deiner Pokémon an. Die Multienergiekarte liefert jeden Typ von Energie, solange sie im Spiel ist, liefert aber nur eine Energie auf einmal. (Zählt außerhalb des Spiels nicht als Basaisenergiekarte.) Die Multienergiekarte liefert 1 Energie, wenn sie an ein Pokémon angelegt wird, das schon Spezialenergiekarten hat."
	}
}

export default card
