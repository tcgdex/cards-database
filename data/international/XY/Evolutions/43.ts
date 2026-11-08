import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
		'es-es': "Nidoran♂",
		'it-it': "Nidoran♂",
		'pt-br': "Nidoran♂",
		'de-de': "Nidoran♂"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Double Stab",
				'fr-fr': "Entaille Double",
				'es-es': "Doble Puñalada",
				'it-it': "Doppia Pugnalata",
				'pt-br': "Facada Dupla",
				'de-de': "Doppelstich"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 10 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "Its large ears are flapped like wings when it is listening to distant sounds. It extends toxic barbs when angered.",
	},
}

export default card
