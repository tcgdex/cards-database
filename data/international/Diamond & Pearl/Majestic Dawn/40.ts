import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'de-de': "Voltenso"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Wave",
				'fr-fr': "Cage-éclair",
				'de-de': "Donnerwelle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Volt Crush",
				'fr-fr': "Écras'volt",
				'de-de': "Volt-Zermalmer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to Manectric and this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à Elecsprint et cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' lege 1 Energie, die an Voltenso angelegt ist, auf deinen Ablagestapel und dieser Angriff fügt 40 Schadenpunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		'en-us': "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts.",
	},

	thirdParty: {
		cardmarket: 278089,
		tcgplayer: 87161
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
