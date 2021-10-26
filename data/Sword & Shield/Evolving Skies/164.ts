import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Zinnia's Resolve",
		fr: "Résolution d'Amaryllis",
		es: "Decisión de Tristana",
		it: "Grinta di Lyris",
		pt: "Resolução da Zínia",
		de: "Amalias Entschluss"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can play this card only if you discard 2 other cards from your hand.\nDraw a card for each of your opponent's Pokémon in play.",
		fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\nPiochez une carte pour chacun des Pokémon en jeu de votre adversaire.",
		es: "Puedes jugar esta carta solo si descartas otras 2 cartas de tu mano.\nRoba 1 carta por cada uno de los Pokémon en juego de tu rival.",
		it: "Puoi giocare questa carta solo se scarti altre due carte che hai in mano.\nPesca una carta per ogni Pokémon del tuo avversario in gioco.",
		pt: "Você só pode jogar esta carta se descartar 2 outras cartas da sua mão.\nCompre 1 carta para cada um dos Pokémon do seu oponente em jogo.",
		de: "Du kannst diese Karte nur spielen, wenn du 2 andere Karten aus deiner Hand auf deinen Ablagestapel legst.\nZiehe 1 Karte für jedes Pokémon deines Gegners im Spiel."
	},

	trainerType: "Supporter",
	illustrator: "Taira Akitsu",
	regulationMark: "E"
}

export default card
