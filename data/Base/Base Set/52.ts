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

	description: {
		fr: "Il adore la musculation. Il pratique les arts martiaux pour devenir encore plus fort.",
		it: "Si allena continuamente per sviluppare al massimo i suoi muscoli d'acciaio. Pratica tutte le arti marziali per diventare sempre più invincibile. LIV 20 N.66",
	},

	thirdParty: {
		cardmarket: 273747,
		tcgplayer: 42396
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/053.ts"
		}
	]
}

export default card
