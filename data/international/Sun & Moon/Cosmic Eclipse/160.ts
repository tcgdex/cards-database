import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Jangmo-o",
		'fr-fr': "Bébécaille",
		'es-es': "Jangmo-o",
		'it-it': "Jangmo-o",
		'pt-br': "Jangmo-o",
		'de-de': "Miniras"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		782,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Fighting",
			],
			name: {
				'en-us': "Raging Claws",
				'fr-fr': "Griffes Enragées",
				'es-es': "Garras Furiosas",
				'it-it': "Furiartigli",
				'pt-br': "Garras Devastadoras",
				'de-de': "Wutklauen"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It smacks the scales on its head against rocks or against the ground to frighten its opponents. It can also contact its friends with these noises.",
	},

	thirdParty: {
		cardmarket: 408429,
		tcgplayer: 201281
	}
}

export default card
