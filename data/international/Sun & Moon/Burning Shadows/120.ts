import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Plumeria",
		'fr-fr': "Apocyne",
		'es-es': "Francine",
		'it-it': "Plumeria",
		'pt-br': "Pluméria",
		'de-de': "Fran"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez 2 cartes de votre main. Dans ce cas, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		'en-us': "Discard 2 cards from your hand. If you do, discard an Energy from 1 of your opponent’s Pokémon.",
		'es-es': "Descarta 2 cartas de tu mano. Si lo haces, descarta 1 Energía de 1 de los Pokémon de tu rival.",
		'it-it': "Scarta due delle carte che hai in mano. Se lo fai, scarta un’Energia assegnata a uno dei Pokémon del tuo avversario.",
		'pt-br': "Descarte 2 cartas da sua mão. Se fizer isto, descarte 1 Energia de 1 dos Pokémon do seu oponente.",
		'de-de': "Lege 2 Karten aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 299520,
		tcgplayer: 138617
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
