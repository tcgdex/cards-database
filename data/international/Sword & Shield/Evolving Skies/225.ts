import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Zinnia's Resolve",
		'fr-fr': "Résolution d'Amaryllis",
		'es-es': "Decisión de Tristana",
		'it-it': "Grinta di Lyris",
		'pt-br': "Resolução da Zínia",
		'de-de': "Amalias Entschluss"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "You can play this card only if you discard 2 other cards from your hand.\nDraw a card for each of your opponent's Pokémon in play.",
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\nPiochez une carte pour chacun des Pokémon en jeu de votre adversaire.",
		'es-es': "Puedes jugar esta carta solo si descartas otras 2 cartas de tu mano.\nRoba 1 carta por cada uno de los Pokémon en juego de tu rival.",
		'it-it': "Puoi giocare questa carta solo se scarti altre due carte che hai in mano.\nPesca una carta per ogni Pokémon del tuo avversario in gioco.",
		'pt-br': "Você só pode jogar esta carta se descartar 2 outras cartas da sua mão.\nCompre 1 carta para cada um dos Pokémon do seu oponente em jogo.",
		'de-de': "Du kannst diese Karte nur spielen, wenn du 2 andere Karten aus deiner Hand auf deinen Ablagestapel legst.\nZiehe 1 Karte für jedes Pokémon deines Gegners im Spiel."
	},

	trainerType: "Supporter",
	illustrator: "Taira Akitsu",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574283,
				tcgplayer: 246800
			}
		},
	],
}

export default card
