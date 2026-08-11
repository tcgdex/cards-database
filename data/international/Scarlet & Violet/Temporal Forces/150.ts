import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hand Trimmer",
		'fr-fr': "Tondeuse de Main",
		'es-es': "Recortadora de Mano",
		'it-it': "Rasamano",
		'pt-br': "Aparador de Mão",
		'de-de': "Handtrimmer"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Each player discards cards from their hand until they have 5 cards in their hand. Your opponent discards first. (If a player has 5 or fewer cards in their hand, they do not discard.)",
		'fr-fr': "Chaque joueur défausse des cartes de sa main jusqu'à en avoir 5 en main. Votre adversaire défausse en premier. (Si un joueur a 5 cartes ou moins dans sa main, il ne défausse pas.)",
		'es-es': "Cada jugador descarta cartas de su mano hasta que tenga 5 cartas en su mano. Tu rival descarta en primer lugar. (Si un jugador tiene 5 cartas o menos en su mano, no descarta ninguna).",
		'it-it': "Ciascun giocatore scarta delle carte che ha in mano fino ad averne cinque in mano. Il tuo avversario scarta per primo. Se un giocatore ha cinque o meno carte in mano, non scarta.",
		'pt-br': "Cada jogador descarta cartas da própria mão até ter 5 cartas na própria mão. Seu oponente descarta primeiro. (Se um jogador tiver 5 ou menos cartas na própria mão, ele não descartará.)",
		'de-de': "Jeder Spieler legt so lange Karten von seiner Hand auf seinen Ablagestapel, bis er 5 Karten auf seiner Hand hat. Dein Gegner legt als Erster ab. (Wenn ein Spieler 5 oder weniger Karten auf seiner Hand hat, legt er keine Karten ab.)"
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760780,
				tcgplayer: 542665
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760780,
				tcgplayer: 542665
			}
		},
	],

	illustrator: "Ayaka Yoshida",

}

export default card