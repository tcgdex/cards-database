import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Multi Energy",
		fr: "Énergies multiples",
		de: "Multi-Energie"
	},

	illustrator: "Tokumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege die Multienergiekarte an eines deiner Pokémon an. Die Multienergiekarte liefert jeden Typ von Energie, solange sie im Spiel ist, liefert aber nur eine Energie auf einmal. (Zählt außerhalb des Spiels nicht als Basaisenergiekarte.) Die Multienergiekarte liefert 1 Energie, wenn sie an ein Pokémon angelegt wird, das schon Spezialenergiekarten hat.",
		fr: "Attachez Énergies multiples à un de vos Pokémon. Lorsqu'elle est en jeu, Énergies multiples fournit tous les types d'énergie (un seul à la fois). (Elle ne compte pas comme carte Énergie de base lorsqu'elle n'est pas en jeu). Énergies multiples fournit une énergie Incolore lorsqu'elle est attachée à un Pokémon qui possède déjà des cartes Énergie Spéciales.",
	},

	thirdParty: {
		cardmarket: 276279,
		tcgplayer: 87630
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
