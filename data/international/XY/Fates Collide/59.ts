import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Wormadam",
		'fr-fr': "Cheniselle",
		'es-es': "Wormadam",
		'it-it': "Wormadam",
		'pt-br': "Wormadam",
		'de-de': "Burmadame"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Strike Back",
				'fr-fr': "Vengeur",
				'es-es': "Contraimpacto",
				'it-it': "Risposta",
				'pt-br': "Revidar",
				'de-de': "Kontern"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of damage counters on this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 20 de danos vezes o número de contadores de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Head",
				'fr-fr': "Tête de Fer",
				'es-es': "Cabeza de Hierro",
				'it-it': "Metaltestata",
				'pt-br': "Cabeça de Ferro",
				'de-de': "Eisenschädel"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "60+",

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

	retreat: 2,

	description: {
		'en-us': "When Burmy evolved, its cloak became a part of this Pokémon's body. The cloak is never shed.",
	},

	thirdParty: {
		cardmarket: 289829,
		tcgplayer: 117816
	}
}

export default card
