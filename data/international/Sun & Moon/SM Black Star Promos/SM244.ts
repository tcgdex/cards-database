import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [190],
	set: Set,

	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	illustrator: "Shibuzoh.",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Yank Out",
			'fr-fr': "Extirper",
			'es-es': "Arranque",
			'it-it': "Strappar Via",
			'pt-br': "Arrancar à Força",
			'de-de': "Herausreißen"
		},

		effect: {
			'en-us': "Discard random cards from your opponent’s hand until they have 5 cards in their hand.",
			'fr-fr': "Défaussez au hasard des cartes de la main de votre adversaire jusqu’à ce qu’il ne lui reste que 5 cartes en main.",
			'es-es': "Descarta cartas aleatorias de la mano de tu rival hasta que este tenga 5 cartas en su mano.",
			'it-it': "Scarta delle carte a caso dalla mano del tuo avversario fino a lasciarlo con cinque carte in mano.",
			'pt-br': "Descarte cartas aleatórias da mão do seu oponente até que ele(a) tenha 5 cartas na própria mão.",
			'de-de': "Lege so lang zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel, bis er 5 Karten auf der Hand hat."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Tail Smash",
			'fr-fr': "Éclate-Queue",
			'es-es': "Coletazo",
			'it-it': "Coda Esplosiva",
			'pt-br': "Pancada de Cauda",
			'de-de': "Schwanzschmetterer"
		},

		damage: 30,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "As it did more and more with its tail, its hands became clumsy. It makes its nest high in the treetops.",
	},
}

export default card
