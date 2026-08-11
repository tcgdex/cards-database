import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'it-it': "Rotom",
		'pt-br': "Rotom",
		'de-de': "Rotom"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electric Mischief",
				'fr-fr': "Espièglerie Électrique",
				'es-es': "Jugarreta Eléctrica",
				'it-it': "Elettroburla",
				'pt-br': "Travessura Elétrica",
				'de-de': "Elektrostreich"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				'fr-fr': "Lancez 3 pièces. Pour chaque côté face, choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				'es-es': "Lanza 3 monedas. Por cada cara, elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				'it-it': "Lancia tre volte una moneta. Ogni volta che esce testa, scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				'pt-br': "Jogue 3 moedas. Para cada cara, escolha um card aleatório da mão do seu oponente. Seu oponente revela aquele card e o embaralha de volta no próprio baralho.",
				'de-de': "Wirf 3 Münzen. Wähle pro \"Kopf\" 1 zufällige Karte aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karte und mischt sie zurück in sein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.",
	},

	thirdParty: {
		cardmarket: 284210,
		tcgplayer: 101450
	}
}

export default card
