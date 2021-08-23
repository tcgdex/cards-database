import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Rapid Strike Style Mustard",
		fr: "Mustar Style Mille Poings",
		es: "Mostaz Estilo Fluido",
		it: "Mustard Stile Pluricolpo",
		pt: "Mostarda Estilo Golpe Fluido",
		de: "Fließender-Stil-Mastrich"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can play this card only when it is the last card in your hand.\nPut a Rapid Strike Pokémon from your discard pile onto your Bench. If you do, draw 5 cards.",
		fr: "Vous ne pouvez jouer cette carte que si c’est votre dernière carte en main.\n\n\nPlacez un Pokémon Mille Poings de votre pile de défausse sur votre Banc. Dans ce cas, piochez 5 cartes.",
		es: "Puedes jugar esta carta solo cuando sea la última carta en tu mano.\n\nPon 1 Pokémon Golpe Fluido de tu pila de descartes en tu Banca. Si lo haces, roba 5 cartas.",
		it: "Puoi giocare questa carta solo se è l’ultima carta che hai in mano.\n\nPrendi un Pokémon Colpo Rapido dalla tua pila degli scarti e mettilo in panchina. Se lo fai, pesca cinque carte.",
		pt: "Você só pode jogar esta carta se ela for a última carta na sua mão.\n\nColoque 1 Pokémon Golpe Fluido da sua pilha de descarte no seu Banco. Se fizer isto, compre 5 cartas.",
		de: "Du kannst diese Karte nur spielen, wenn es die letzte Karte auf deiner Hand ist.\n\nLege 1 Fließender-Angriff-Pokémon aus deinem Ablagestapel auf deine Bank. Wenn du das machst, ziehe 5 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card