import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Eco Arm",
		'fr-fr': "Bras Écologique",
		'es-es': "Brazo Ecológico",
		'it-it': "Braccio Ecologico",
		'pt-br': "Braço de Eco",
		'de-de': "ÖkoArm"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez 3 cartes Outil Pokémon de votre pile de défausse avec votre deck.",
		'en-us': "Shuffle 3 Pokémon Tool cards from your discard pile into your deck.",
		'es-es': "Pon 3 cartas de Herramienta Pokémon de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia tre carte Oggetto Pokémon dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe 3 cards de Ferramenta Pokémon da sua pilha de descarte no seu baralho.",
		'de-de': "Mische 3 Pokémon-Ausrüstungen aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 284252,
		tcgplayer: 101492
	}
}

export default card
