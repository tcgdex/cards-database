import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Audino",
		fr: "Nanméouïe",
		es: "Audino",
		it: "Audino",
		pt: "Audino",
		de: "Ohrdoch"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wake-up Beam",
				fr: "Rayon Vivifiant",
				de: "Weckstrahl"
			},
			effect: {
				en: "Remove all Special Conditions from the Defending Pokémon.",
				fr: "Retirez tous les États Spéciaux du Pokémon Défenseur.",
				de: "Alle Speziellen Zustände auf dem Verteidigenden Pokémon verlieren ihre Wirkung."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drain Slap",
				fr: "Baffe Sangsue",
				de: "Watschensauger"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Its auditory sense is astounding. It has radarlike ability to understand its surroundings through slight sounds.",
		de: "Hat ein außerordentlich feines Gehör. Es tastet seine Umgebung auf jedes noch so leise Geräusch ab wie ein Radar."
	},

	thirdParty: {
		cardmarket: 280547,
		tcgplayer: 83663
	}
}

export default card
