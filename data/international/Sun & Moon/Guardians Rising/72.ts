import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		674,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Karate Chop",
				'fr-fr': "Poing-Karaté",
				'es-es': "Golpe Kárate",
				'it-it': "Colpokarate",
				'pt-br': "Golpe de Caratê",
				'de-de': "Karateschlag"
			},
			effect: {
				'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte weniger mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "60-",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It grows up imitating the behavior of Pangoro, which it looks up to as a leader.",
	},

	thirdParty: {
		cardmarket: 297533,
		tcgplayer: 130982
	}
}

export default card
