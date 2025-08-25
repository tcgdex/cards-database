import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Hand Trimmer",
		fr: "Tondeuse de Main",
		es: "Recortadora de Mano",
		it: "Rasamano",
		pt: "Aparador de Mão",
		de: "Handtrimmer"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Each player discards cards from their hand until they have 5 cards in their hand. Your opponent discards first. (If a player has 5 or fewer cards in their hand, they do not discard.)",
		fr: "Chaque joueur défausse des cartes de sa main jusqu'à en avoir 5 en main. Votre adversaire défausse en premier. (Si un joueur a 5 cartes ou moins dans sa main, il ne défausse pas.)",
		es: "Cada jugador descarta cartas de su mano hasta que tenga 5 cartas en su mano. Tu rival descarta en primer lugar. (Si un jugador tiene 5 cartas o menos en su mano, no descarta ninguna).",
		it: "Ciascun giocatore scarta delle carte che ha in mano fino ad averne cinque in mano. Il tuo avversario scarta per primo. Se un giocatore ha cinque o meno carte in mano, non scarta.",
		pt: "Cada jogador descarta cartas da própria mão até ter 5 cartas na própria mão. Seu oponente descarta primeiro. (Se um jogador tiver 5 ou menos cartas na própria mão, ele não descartará.)",
		de: "Jeder Spieler legt so lange Karten von seiner Hand auf seinen Ablagestapel, bis er 5 Karten auf seiner Hand hat. Dein Gegner legt als Erster ab. (Wenn ein Spieler 5 oder weniger Karten auf seiner Hand hat, legt er keine Karten ab.)"
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Ayaka Yoshida",

	thirdParty: {
		cardmarket: 760780
	}
}

export default card