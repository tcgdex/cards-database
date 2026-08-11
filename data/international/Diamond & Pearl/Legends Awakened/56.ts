import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'de-de': "Groink"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Magical Step",
				'fr-fr': "Pas magique",
				'de-de': "Zauberschnitt"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused. Put 6 damage counters instead of 3 on the Confused Pokémon.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus. Placez sur le Pokémon Confus 6 marqueurs de dégât au lieu de 3.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt. Wenn wegen des Speziellen Zustands \"verwirrt\" 3 Schadensmarken auf das Verteidigende Pokémon gelegt werden sollen, lege stattdessen 6 Schadensmarken darauf."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Grind",
				'fr-fr': "Écrase",
				'de-de': "Zermahlen"
			},
			effect: {
				'en-us': "Does 20 damage times the amount of Energy attached to Grumpig.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à Groret.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Groink angelegten Energien zu,"
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It uses black pearls to amplify its psycho-power. It does an odd dance to gain control over foes.",
		'fr-fr': "Les perles noires amplifient ses pouvoirs psy. Sa danse étrange lui permet de contrôler ses ennemis."
	},

	thirdParty: {
		cardmarket: 278205,
		tcgplayer: 85970
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
