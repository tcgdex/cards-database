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
		en: "Attach Multi Energy to 1 of your Pokémon. While in play, Multi Energy provides every type of Energy but provides only 1 Energy at a time. (Doesn't count as a basic Energy card when not in play.) Multi energy provides Colorless Energy when attached to a Pokémon that already has Special Energy cards attached to it.",
		de: "Lege die Multienergiekarte an eines deiner Pokémon an. Die Multienergiekarte liefert jeden Typ von Energie, solange sie im Spiel ist, liefert aber nur eine Energie auf einmal. (Zählt außerhalb des Spiels nicht als Basaisenergiekarte.) Die Multienergiekarte liefert 1 Energie, wenn sie an ein Pokémon angelegt wird, das schon Spezialenergiekarten hat.",
		fr: "Attachez Énergies multiples à un de vos Pokémon. Lorsqu'elle est en jeu, Énergies multiples fournit tous les types d'énergie (un seul à la fois). (Elle ne compte pas comme carte Énergie de base lorsqu'elle n'est pas en jeu). Énergies multiples fournit une Énergie Incolore lorsqu'elle est attachée à un Pokémon qui possède déjà des cartes Énergie Spéciales."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275870,
				tcgplayer: 87629
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275870,
				tcgplayer: 87629
			}
		},
		{
			type: "normal",
			size: 'jumbo',
			thirdParty: {
				tcgplayer: 211499
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 228157
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477407
			}
		},
		{
			type: "holo",
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 228157
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477407
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				tcgplayer: 477408
			}
		},
		{
			type: "holo",
			foil: 'cosmos',
			stamp: ["winner"],
			thirdParty: {
				cardmarket: 280581,
				tcgplayer: 236462
			}
		},
		{
			type: "normal",
			stamp: ["winner"],
			size: "jumbo",
			thirdParty: {
				cardmarket: 362910,
				tcgplayer: 362910
			}
		}
	],

	retreat: 0
}

export default card
