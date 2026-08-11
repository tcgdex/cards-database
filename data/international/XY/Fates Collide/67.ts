import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'de-de': "Pantimos"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Mimic",
				'fr-fr': "Copie",
				'es-es': "Mimético",
				'it-it': "Mimica",
				'pt-br': "Mímica",
				'de-de': "Mimikry"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba un número de cartas igual al número de cartas en la mano de tu rival.",
				'it-it': "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca un numero di carte pari a quelle che ha in mano il tuo avversario.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre o número de cards equivalente ao número de cards na mão do seu oponente.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend genauso viele Karten, wie dein Gegner auf der Hand hat."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Juggling",
				'fr-fr': "Jonglerie",
				'es-es': "Malabarismo",
				'it-it': "Giocoleria",
				'pt-br': "Malabarismo",
				'de-de': "Jongleur"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 20 de danos vezes o número de caras.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is adept at conning people. It is said to be able to create walls out of thin air by miming.",
	},

	thirdParty: {
		cardmarket: 289888,
		tcgplayer: 117842
	}
}

export default card
