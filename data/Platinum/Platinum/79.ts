import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		de: "Lapras"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [131],

	hp: 80,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
				de: "Zermahlen"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Lapras.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Lokhlass",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der an Lapras angelegten Energien zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Beam",
				fr: "Laser glace",
				de: "Eisstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		en: "It loves crossing the sea with people and Pokémon on its back. It understands human speech.",
		de: "Es liebt es, das Meer mit PKMN und Menschen auf dem Rücken zu überqueren. Es versteht die Menschen."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86619,
				cardmarket: 278500
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278500,
				tcgplayer: 86619
			}
		}
	],

}

export default card
