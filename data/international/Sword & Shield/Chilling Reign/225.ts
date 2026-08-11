import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Echoing Horn",
		'fr-fr': "Corne Résonnante",
		'es-es': "Cuerno Resonante",
		'it-it': "Corno Echeggiante",
		'pt-br': "Berrante Retumbante",
		'de-de': "Echohorn"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put a Basic Pokémon from your opponent's discard pile onto their Bench.",
		'fr-fr': "Placez un Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
		'es-es': "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
		'it-it': "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina.",
		'pt-br': "Coloque 1 Pokémon Básico da pilha de descarte do seu oponente no Banco dele(a).",
		'de-de': "Lege 1 Basis-Pokémon aus dem Ablagestapel deines Gegners auf seine Bank."
	},

	trainerType: "Item",


	illustrator: "Studio Bora Inc.",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567333,
				tcgplayer: 241829
			}
		},
	],
}

export default card
