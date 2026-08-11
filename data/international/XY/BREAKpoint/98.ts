import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Delinquent",
		'fr-fr': "Terreur",
		'es-es': "Macarra",
		'it-it': "Tipaccia",
		'pt-br': "Delinquente",
		'de-de': "Halbstarke"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez toute carte Stade en jeu. Dans ce cas, votre adversaire défausse 3 cartes de sa main.",
		'en-us': "Discard any Stadium card in play. If you do, your opponent discards 3 cards from his or her hand.",
		'es-es': "Descarta cualquier carta de Estadio en juego. Si lo haces, tu rival descarta 3 cartas de su mano.",
		'it-it': "Scarta una carta Stadio in gioco. Se lo fai, il tuo avversario scarta tre delle carte che ha in mano.",
		'pt-br': "Descarte algum card de Estádio em jogo. Se fizer isso, o seu oponente descarta 3 cards da própria mão.",
		'de-de': "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel. Wenn du das machst, legt dein Gegner 3 seiner Handkarten auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288273,
		tcgplayer: 111630
	}
}

export default card
