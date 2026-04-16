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
		de: "Lege die Multienergiekarte an eines deiner Pokémon an. Die Multienergiekarte liefert jeden Typ von Energie, solange sie im Spiel ist, liefert aber nur eine Energie auf einmal. (Zählt außerhalb des Spiels nicht als Basaisenergiekarte.) Die Multienergiekarte liefert 1 Energie, wenn sie an ein Pokémon angelegt wird, das schon Spezialenergiekarten hat.",
		fr: "Attachez Énergies multiples à un de vos Pokémon. Lorsqu'elle est en jeu, Énergies multiples fournit tous les types d'énergie (un seul à la fois). (Elle ne compte pas comme carte Énergie de base lorsqu'elle n'est pas en jeu). Énergies multiples fournit une Énergie Incolore lorsqu'elle est attachée à un Pokémon qui possède déjà des cartes Énergie Spéciales.",
	},

	thirdParty: {
		cardmarket: 275870,
		tcgplayer: 87629
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		},
		{
			type: "normal",
			stamp: ["winner"]
		},
		{
			type: "normal",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
