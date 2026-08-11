import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Watchog",
		'fr-fr': "Miradar",
		'es-es': "Watchog",
		'it-it': "Watchog",
		'pt-br': "Watchog",
		'de-de': "Kukmarda"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		505,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scrutinize",
				'fr-fr': "Examen",
				'es-es': "Escudriñar",
				'it-it': "Scrutinio",
				'pt-br': "Olhada Longa",
				'de-de': "Langer Blick"
			},
			effect: {
				'en-us': "Look at the top 2 cards of your opponent’s deck, discard 1 of them, and put the other card back.",
				'fr-fr': "Regardez les 2 cartes du dessus du deck de votre adversaire, défaussez-en une puis replacez l’autre carte sur le deck.",
				'es-es': "Mira las 2 primeras cartas de la baraja de tu rival, descarta 1 de ellas y pon la otra de nuevo en la parte superior de su baraja.",
				'it-it': "Guarda le prime due carte del mazzo del tuo avversario, scartane una e rimetti a posto l’altra.",
				'pt-br': "Olhe as 2 primeiras cartas do baralho do seu oponente, descarte 1 delas e retorne a outra ao baralho.",
				'de-de': "Schau dir die obersten 2 Karten des Decks deines Gegners an, lege 1 von ihnen auf seinen Ablagestapel und lege die andere Karte zurück."
			},

		},
		{
			cost: [
				"Colorless",
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
				'en-us': "Flip 2 coins. This attack does 60 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

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
		'en-us': "Using luminescent matter, it makes its eyes and body glow and stuns attacking opponents.",
	},

	thirdParty: {
		cardmarket: 297560,
		tcgplayer: 131026
	}
}

export default card
