import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Raticate",
		fr: "Rattatac d’Alola",
		es: "Raticate de Alola",
		it: "Raticate di Alola",
		pt: "Raticate de Alola",
		de: "Alola-Rattikarl"
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Evil Orders",
				fr: "Consignes Maléfiques",
				es: "Órdenes Malvadas",
				it: "Ordini Malefici",
				pt: "Ordens Maléficas",
				de: "Böse Befehle"
			},
			effect: {
				en: "Search your deck for a number of cards up to the number of your Benched Pokémon and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez autant de cartes dans votre deck que le nombre de Pokémon sur votre Banc, puis placez-les dans votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja un número de cartas hasta el número de tus Pokémon en Banca y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un numero di carte uguale o inferiore al numero di Pokémon nella tua panchina e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por um número de cartas no seu baralho até o número de Pokémon no seu Banco e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu so viel Karten, wie du Pokémon auf deiner Bank hast, und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Endeavor",
				fr: "Effort",
				es: "Esfuerzo",
				it: "Rimonta",
				pt: "Esforço",
				de: "Notsituation"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "60+",

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
