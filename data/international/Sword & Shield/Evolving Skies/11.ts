import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'es-es': "Dwebble",
		'it-it': "Dwebble",
		'pt-br': "Dwebble",
		'de-de': "Lithomith"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Shigenori Negishi",

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Ram",
			'de-de': "Ramme"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Sharp Claws",
			'fr-fr': "Griffes Affûtées",
			'es-es': "Garras Afiladas",
			'it-it': "Artigli Affilati",
			'pt-br': "Sharp Claws",
			'de-de': "Scharfe Krallen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Flip a coin. If heads, this attack does 30 more damage.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon."
	},

	dexId: [557],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574035,
				tcgplayer: 246825
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574035,
				tcgplayer: 246825
			}
		},
	],
}

export default card
