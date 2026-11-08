import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Great Catcher",
		'fr-fr': "Attrape-Suprême",
		'es-es': "Gran Capturador",
		'it-it': "Acchiappa-Pokémon Potenziato",
		'pt-br': "Pegador Gigante",
		'de-de': "Superfänger"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nÉchangez l’un des Pokémon-GX ou Pokémon-EX de Banc de votre adversaire avec son Pokémon Actif.",
		'en-us': "You can play this card only if you discard 2 other cards from your hand.\n\nSwitch 1 of your opponent’s Benched Pokémon-GX or Pokémon-EX with their Active Pokémon.",
		'es-es': "Puedes jugar esta carta solo si descartas otras 2 cartas de tu mano.\n\nCambia 1 de los Pokémon-GX o Pokémon-EX en Banca de tu rival por su Pokémon Activo.",
		'it-it': "Puoi giocare questa carta solo se scarti altre due carte che hai in mano.\n\nScambia uno dei Pokémon-GX o dei Pokémon-EX nella panchina del tuo avversario con il suo Pokémon attivo.",
		'pt-br': "Você só pode jogar esta carta se descartar outras 2 cartas da sua mão.\n\nTroque 1 dos Pokémon-GX ou Pokémon-EX no Banco do seu oponente pelo Pokémon Ativo dele(a).",
		'de-de': "Du kannst diese Karte nur spielen, wenn du 2 andere Karten aus deiner Hand auf deinen Ablagestapel legst.\n\nTausche 1 Pokémon-GX oder Pokémon-EX auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 410649,
		tcgplayer: 201627
	}
}

export default card
