import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime",
		de: "Pantimos"
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
				en: "Mimic",
				fr: "Copie",
				es: "Mimético",
				it: "Mimica",
				pt: "Mímica",
				de: "Mimikry"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba un número de cartas igual al número de cartas en la mano de tu rival.",
				it: "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca un numero di carte pari a quelle che ha in mano il tuo avversario.",
				pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre o número de cards equivalente ao número de cards na mão do seu oponente.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend genauso viele Karten, wie dein Gegner auf der Hand hat."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Juggling",
				fr: "Jonglerie",
				es: "Malabarismo",
				it: "Giocoleria",
				pt: "Malabarismo",
				de: "Jongleur"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 20 de danos vezes o número de caras.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
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



}

export default card
