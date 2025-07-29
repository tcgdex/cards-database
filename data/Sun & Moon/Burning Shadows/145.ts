import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Plumeria",
		fr: "Apocyne",
		es: "Francine",
		it: "Plumeria",
		pt: "Pluméria",
		de: "Fran"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 2 cartes de votre main. Dans ce cas, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		en: "Discard 2 cards from your hand. If you do, discard an Energy from 1 of your opponent’s Pokémon.",
		es: "Descarta 2 cartas de tu mano. Si lo haces, descarta 1 Energía de 1 de los Pokémon de tu rival.",
		it: "Scarta due delle carte che hai in mano. Se lo fai, scarta un’Energia assegnata a uno dei Pokémon del tuo avversario.",
		pt: "Descarte 2 cartas da sua mão. Se fizer isto, descarte 1 Energia de 1 dos Pokémon do seu oponente.",
		de: "Lege 2 Karten aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 299520
	}
}

export default card
