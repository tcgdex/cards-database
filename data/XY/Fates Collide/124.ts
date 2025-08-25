import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Team Rocket's Handiwork",
		fr: "Méfaits de la Team Rocket",
		es: "Fechoría del Team Rocket",
		it: "Malefatte del Team Rocket",
		pt: "Obra da Equipe Rocket",
		de: "Team Rockets Machenschaften"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez 2 pièces. Pour chaque côté face, défaussez 2 cartes du dessus du deck de votre adversaire.",
		en: "Flip 2 coins. For each heads, discard 2 cards from the top of your opponent's deck.",
		es: "Lanza 2 monedas. Por cada cara, descarta las 2 primeras cartas de la baraja de tu rival.",
		it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta le prime due carte del mazzo del tuo avversario.",
		pt: "Jogue 2 moedas. Para cada cara, descarte 2 cards de cima do baralho do seu oponente.",
		de: "Wirf 2 Münzen. Lege pro \"Kopf\" 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 289932,
		tcgplayer: 117884
	}
}

export default card
