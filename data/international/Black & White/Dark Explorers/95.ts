import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Hooligans Jim & Cas",
		'fr-fr': "Loubards Pit & Paul",
		'es-es': "Pandilleros Tim y Rick",
		'it-it': "Teppisti Bo & Brian",
		'pt-br': "Arruaceiros Jim & Cas",
		'de-de': "Rabauken Bob & Rob"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Flip a coin. If heads, choose 3 random cards from your opponent’s hand. Your opponent reveals those cards and shuffles them into his or her deck.",
		'fr-fr': "Lancez une pièce. Si c’est face, choisissez 3 cartes au hasard de la main de votre adversaire. Votre adversaire montre les cartes choisies et les mélange avec son deck.",
		'es-es': "Lanza una moneda. Si sale cara, elige 3 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
		'it-it': "Lancia una moneta. Se esce testa, scegli tre carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
		'pt-br': "Jogue uma moeda. Se sair cara, escolha 3 cards aleatórios na mão do seu oponente. Seu oponente revela esses cards e os embaralha no baralho dele ou dela.",
		'de-de': "Wirf 1 Münze. Wähle bei „Kopf“ 3 zufällige Karten aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karten und mischt sie zurück in sein Deck."
	},

	thirdParty: {
		cardmarket: 280423,
		tcgplayer: 86168
	}
}

export default card
