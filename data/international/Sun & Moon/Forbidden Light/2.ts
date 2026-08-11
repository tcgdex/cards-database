import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Alolan Exeggutor",
		'fr-fr': "Noadkoko d’Alola",
		'es-es': "Exeggutor de Alola",
		'it-it': "Exeggutor di Alola",
		'pt-br': "Exeggutor de Alola",
		'de-de': "Alola-Kokowei"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 160,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Tropical Shake",
				'fr-fr': "Balancement Tropical",
				'es-es': "Sacudida Tropical",
				'it-it': "Scossone Tropicale",
				'pt-br': "Balançada Tropical",
				'de-de': "Tropisches Schütteln"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can’t add more than 100 damage in this way.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque type de carte Énergie de base dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada tipo de carta de Energía Básica diferente en tu pila de descartes. No puedes añadir más de 100 puntos de daño de esta manera.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni tipo di carta Energia base nella tua pila degli scarti. Non puoi aggiungere più di 100 danni in questo modo.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada tipo de carta de Energia básica na sua pilha de descarte. Você não pode adicionar mais de 100 pontos de dano desta forma.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der verschiedenen Basis-Energiekarten-Typen in deinem Ablagestapel zu. Du kannst auf diese Weise höchstens 100 Schadenspunkte mehr zufügen."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon.",
	},

	thirdParty: {
		cardmarket: 355523,
		tcgplayer: 165649
	}
}

export default card
