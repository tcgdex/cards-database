import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Team Rocket's Handiwork",
		'fr-fr': "Méfaits de la Team Rocket",
		'es-es': "Fechoría del Team Rocket",
		'it-it': "Malefatte del Team Rocket",
		'pt-br': "Obra da Equipe Rocket",
		'de-de': "Team Rockets Machenschaften"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez 2 cartes du dessus du deck de votre adversaire.",
		'en-us': "Flip 2 coins. For each heads, discard 2 cards from the top of your opponent's deck.",
		'es-es': "Lanza 2 monedas. Por cada cara, descarta las 2 primeras cartas de la baraja de tu rival.",
		'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, scarta le prime due carte del mazzo del tuo avversario.",
		'pt-br': "Jogue 2 moedas. Para cada cara, descarte 2 cards de cima do baralho do seu oponente.",
		'de-de': "Wirf 2 Münzen. Lege pro \"Kopf\" 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 289944,
		tcgplayer: 117884
	}
}

export default card
