import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Retrieval",
		'fr-fr': "Récupération d’Énergie",
		'es-es': "Recuperación de Energía",
		'it-it': "Recupero di Energia",
		'pt-br': "Recuperação de Energia",
		'de-de': "Energie-Rückgewinnung"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "Put 2 basic Energy cards from your discard pile into your hand.",
		'fr-fr': "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
		'es-es': "Pon 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi due carte Energia base dalla tua pila degli scarti e aggiungile a quelle che hai in mano.",
		'pt-br': "Coloque 2 cards de Energia básica da sua pilha de descarte em sua mão.",
		'de-de': "Nimm 2 Basis-Energiekarten von deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280071,
				tcgplayer: 98717
			}
		},
	],

}

export default card
