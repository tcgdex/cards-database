import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d’Alola",
		'es-es': "Diglett de Alola",
		'it-it': "Diglett di Alola",
		'pt-br': "Diglett de Alola",
		'de-de': "Alola-Digda"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Iron Head",
				'fr-fr': "Tête de Fer",
				'es-es': "Cabeza de Hierro",
				'it-it': "Metaltestata",
				'pt-br': "Cabeça de Ferro",
				'de-de': "Eisenschädel"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 10 damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 10 pontos de dano para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its golden hairs function as sensors. It pokes them out of its burrow to monitor its surroundings.",
	},

	thirdParty: {
		cardmarket: 316005,
		tcgplayer: 157695
	}
}

export default card
