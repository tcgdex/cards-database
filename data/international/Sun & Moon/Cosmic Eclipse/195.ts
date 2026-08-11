import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Lana’s Fishing Rod",
		'fr-fr': "Canne à Pêche de Néphie",
		'es-es': "Caña de Nereida",
		'it-it': "Amo di Suiren",
		'pt-br': "Vara de Pescar da Vitória",
		'de-de': "Tracys Angel"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Mélangez un Pokémon et une carte Outil Pokémon de votre pile de défausse avec votre deck.",
		'en-us': "Shuffle a Pokémon and a Pokémon Tool card from your discard pile into your deck.",
		'es-es': "Pon 1 Pokémon y 1 carta de Herramienta Pokémon de tu pila de descartes en tu baraja, y baraja todas las cartas.",
		'it-it': "Rimischia un Pokémon e una carta Oggetto Pokémon dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe 1 Pokémon e 1 carta de Ferramenta Pokémon da sua pilha de descarte no seu baralho.",
		'de-de': "Mische I Pokémon und 1 Pokémon-Ausrüstung aus deinem Ablagestapel in dein Deck."
	},
	trainerType: "Item",

}

export default card
