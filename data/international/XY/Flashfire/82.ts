import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Furret",
		'fr-fr': "Fouinar",
		'es-es': "Furret",
		'it-it': "Furret",
		'pt-br': "Furret",
		'de-de': "Wiesenior"
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
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'es-es': "Sentret",
		'it-it': "Sentret",
		'pt-br': "Sentret",
		'de-de': "Wiesor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Buried Treasure Hunt",
				'fr-fr': "Trésor Enfoui",
				'es-es': "Caza del Tesoro Escondido",
				'it-it': "Scopritesori",
				'pt-br': "Caçada ao Tesouro Enterrado",
				'de-de': "Gezielte Schatzsuche"
			},
			effect: {
				'en-us': "Look at the top 4 cards of your deck and put 2 of them into your hand. Discard the other cards.",
				'fr-fr': "Regardez les 4 cartes du dessus de votre deck et ajoutez 2 d'entre elles à votre main. Défaussez les autres cartes.",
				'es-es': "Mira las 4 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Descarta las demás cartas.",
				'it-it': "Guarda le prime quattro carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Scarta le altre carte.",
				'pt-br': "Olhe os 4 cards de cima do seu baralho e coloque 2 deles em sua mão. Descarte os outros cards.",
				'de-de': "Decke die obersten 4 Karten deines Decks auf und nimm 2 auf deine Hand. Lege die anderen Karten auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
				'es-es': "Atizar",
				'it-it': "Schianto",
				'pt-br': "Pancada Brusca",
				'de-de': "Slam"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	description: {
		'en-us': "The mother puts its offspring to sleep by curling up around them. It corners foes with speed.",
	},

	thirdParty: {
		cardmarket: 281565,
		tcgplayer: 91219
	}
}

export default card
