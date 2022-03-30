import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Furret",
		fr: "Fouinar",
		es: "Furret",
		it: "Furret",
		pt: "Furret",
		de: "Wiesenior"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		162,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
		es: "Sentret",
		it: "Sentret",
		pt: "Sentret",
		de: "Wiesor"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Buried Treasure Hunt",
				fr: "Trésor Enfoui",
				es: "Caza del Tesoro Escondido",
				it: "Scopritesori",
				pt: "Caçada ao Tesouro Enterrado",
				de: "Gezielte Schatzsuche"
			},
			effect: {
				en: "Look at the top 4 cards of your deck and put 2 of them into your hand. Discard the other cards.",
				fr: "Regardez les 4 cartes du dessus de votre deck et ajoutez 2 d'entre elles à votre main. Défaussez les autres cartes.",
				es: "Mira las 4 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Descarta las demás cartas.",
				it: "Guarda le prime quattro carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Scarta le altre carte.",
				pt: "Olhe os 4 cards de cima do seu baralho e coloque 2 deles em sua mão. Descarte os outros cards.",
				de: "Decke die obersten 4 Karten deines Decks auf und nimm 2 auf deine Hand. Lege die anderen Karten auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
				es: "Atizar",
				it: "Schianto",
				pt: "Pancada Brusca",
				de: "Slam"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
