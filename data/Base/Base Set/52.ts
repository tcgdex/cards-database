import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Machop",
		fr: "Machoc",
		de: "Machollo",
		it: "Machop"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				de: "Kick",
				it: "Colpo basso"
			},

			damage: 20,

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
		en: "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
		fr: "Il adore la musculation. Il pratique les arts martiaux pour devenir encore plus fort.",
		it: "Si allena continuamente per sviluppare al massimo i suoi muscoli d'acciaio. Pratica tutte le arti marziali per diventare sempre più invincibile. LIV 20 N.66",
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273747,
				tcgplayer: 42396
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107049
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107049
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
