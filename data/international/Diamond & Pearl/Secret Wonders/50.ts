import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'de-de': "Waaty"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Attract Current",
				'fr-fr': "Courant électrique",
				'de-de': "Stromanziehung"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Lightning et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer -Energiekarte und lege sie 1 deiner Pokémon an. Mische dein Deck danach."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electromagnetic Kick",
				'fr-fr': "Coup électromagnétique",
				'de-de': "Elektromagnetischer Kick"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Flaaffy does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Lainergie s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich Waaty selbst 10 Schadenspunkte zu."
			},
			damage: 60,

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

	retreat: 1,

	description: {
		'en-us': "If its coat becomes fully charged with electricity, its tail lights up. It fires hair that zaps on impact.",
	},

	thirdParty: {
		cardmarket: 277803,
		tcgplayer: 85479
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
