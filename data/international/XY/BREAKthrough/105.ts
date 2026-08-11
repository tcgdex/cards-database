import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Spritzee",
		'fr-fr': "Fluvetin",
		'es-es': "Spritzee",
		'it-it': "Spritzee",
		'pt-br': "Spritzee",
		'de-de': "Parfi"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		682,
	],

	hp: 40,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In the past, rather than using perfume, royal ladies carried a Spritzee that would waft a fragrance they liked.",
	},

	thirdParty: {
		cardmarket: 286351,
		tcgplayer: 107224
	}
}

export default card
