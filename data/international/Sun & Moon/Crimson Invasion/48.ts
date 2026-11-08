import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Oranguru",
		'fr-fr': "Gouroutan",
		'es-es': "Oranguru",
		'it-it': "Oranguru",
		'pt-br': "Oranguru",
		'de-de': "Kommandutan"
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
				'en-us': "Fixer of the Forest",
				'fr-fr': "Réparateur de la Forêt",
				'es-es': "Manitas del Bosque",
				'it-it': "Tuttofare della Foresta",
				'pt-br': "Reparador da Floresta",
				'de-de': "Wart des Waldes"
			},
			effect: {
				'en-us': "Put 3 Pokémon Tool cards from your discard pile into your hand.",
				'fr-fr': "Ajoutez 3 cartes Outil Pokémon de votre pile de défausse à votre main.",
				'es-es': "Pon 3 cartas de Herramienta Pokémon de tu pila de descartes en tu mano.",
				'it-it': "Prendi tre carte Oggetto Pokémon dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 3 cartas de Ferramenta Pokémon da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 3 Pokémon-Ausrüstungen aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Zen Headbutt",
				'fr-fr': "Psykoud’Boul",
				'es-es': "Cabezazo Zen",
				'it-it': "Cozzata Zen",
				'pt-br': "Cabeçada Zen",
				'de-de': "Zen-Kopfstoß"
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

	description: {
		'en-us': "Known for its extreme intelligence, this Pokémon will look down on inexperienced Trainers, so it's best suited to veteran Trainers.",
	},

	thirdParty: {
		cardmarket: 311898,
		tcgplayer: 149071
	}
}

export default card
