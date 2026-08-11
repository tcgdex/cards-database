import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'es-es': "Azote",
				'it-it': "Flagello",
				'pt-br': "Mangual",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of damage counters on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 de danos vezes o número de contadores de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.",
	},

	thirdParty: {
		cardmarket: 293390,
		tcgplayer: 124046
	}
}

export default card
