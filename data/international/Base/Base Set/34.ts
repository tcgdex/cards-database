import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'de-de': "Maschock",
		'it-it': "Machoke"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'it-it': "Machop"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Karate Chop",
				'fr-fr': "Poing-Karaté",
				'de-de': "Karateschlag",
				'it-it': "Colpo-karate"
			},
			effect: {
				'en-us': "Does 50 damage minus 10 for each damage counter on Machoke.",
				'fr-fr': "Inflige 50 dégâts moins 10 dégâts pour chaque marqueur de dégâts sur Machopeur.",
				'de-de': "Fügt 50 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Maschock zu.",
				'it-it': "Infligge 50 danni meno 10 danni per ogni segnalino danno su Machoke."
			},
			damage: "50-",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Submission",
				'fr-fr': "Sacrifice",
				'de-de': "Überroller",
				'it-it': "Sottomissione"
			},
			effect: {
				'en-us': "Machoke does 20 damage to itself.",
				'fr-fr': "Machopeur s'inflige 20 dégâts.",
				'de-de': "Maschock fügt sich selbst 20 Schadenspunkte zu.",
				'it-it': "Machoke si infligge 20 danni."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Its muscular body is so powerful that it must wear a power-save belt to help regulate its motions.",
		'fr-fr': "Son corps est si puissant qu'il lui faut une ceinture de force pour équilibrer ses mouvements.",
		'it-it': "Il suo corpo è talmente muscoloso che è costretto ad indossare una cintura salva-energia per regolare i suoi movimenti. LIV 40 N.67"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273729,
				tcgplayer: 42376
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107031
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107031
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
