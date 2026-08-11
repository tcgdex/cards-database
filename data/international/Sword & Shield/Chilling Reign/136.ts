import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Corne Résonnante",
		'en-us': "Echoing Horn",
		'es-es': "Cuerno Resonante",
		'it-it': "Corno Echeggiante",
		'pt-br': "Berrante Retumbante",
		'de-de': "Echohorn"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Placez un Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
		'en-us': "Put a Basic Pokémon from your opponent's discard pile onto their Bench.",
		'es-es': "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
		'it-it': "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina.",
		'pt-br': "Coloque 1 Pokémon Básico da pilha de descarte do seu oponente no Banco dele(a).",
		'de-de': "Lege 1 Basis-Pokémon aus dem Ablagestapel deines Gegners auf seine Bank."
	},

	trainerType: "Item",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567243,
				tcgplayer: 241828
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567243,
				tcgplayer: 241828
			}
		},
	],
}

export default card
