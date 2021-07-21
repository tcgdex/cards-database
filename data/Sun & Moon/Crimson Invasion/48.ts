import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
		es: "Oranguru",
		it: "Oranguru",
		pt: "Oranguru",
		de: "Kommandutan"
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		765,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fixer of the Forest",
				fr: "Réparateur de la Forêt",
				es: "Manitas del Bosque",
				it: "Tuttofare della Foresta",
				pt: "Reparador da Floresta",
				de: "Wart des Waldes"
			},
			effect: {
				en: "Put 3 Pokémon Tool cards from your discard pile into your hand.",
				fr: "Ajoutez 3 cartes Outil Pokémon de votre pile de défausse à votre main.",
				es: "Pon 3 cartas de Herramienta Pokémon de tu pila de descartes en tu mano.",
				it: "Prendi tre carte Oggetto Pokémon dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 3 cartas de Ferramenta Pokémon da sua pilha de descarte na sua mão.",
				de: "Nimm 3 Pokémon-Ausrüstungen aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zen Headbutt",
				fr: "Psykoud’Boul",
				es: "Cabezazo Zen",
				it: "Cozzata Zen",
				pt: "Cabeçada Zen",
				de: "Zen-Kopfstoß"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
