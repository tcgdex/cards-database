import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		it: "Watchog",
		pt: "Watchog",
		de: "Kukmarda"
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
		en: "Patrat",
		fr: "Ratentif",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrutinize",
				fr: "Examen",
				es: "Escudriñar",
				it: "Scrutinio",
				pt: "Olhada Longa",
				de: "Langer Blick"
			},
			effect: {
				en: "Look at the top 2 cards of your opponent’s deck, discard 1 of them, and put the other card back.",
				fr: "Regardez les 2 cartes du dessus du deck de votre adversaire, défaussez-en une puis replacez l’autre carte sur le deck.",
				es: "Mira las 2 primeras cartas de la baraja de tu rival, descarta 1 de ellas y pon la otra de nuevo en la parte superior de su baraja.",
				it: "Guarda le prime due carte del mazzo del tuo avversario, scartane una e rimetti a posto l’altra.",
				pt: "Olhe as 2 primeiras cartas do baralho do seu oponente, descarte 1 delas e retorne a outra ao baralho.",
				de: "Schau dir die obersten 2 Karten des Decks deines Gegners an, lege 1 von ihnen auf seinen Ablagestapel und lege die andere Karte zurück."
			},

		},
		{
			cost: [
				"Colorless",
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
				en: "Flip 2 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
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



}

export default card
