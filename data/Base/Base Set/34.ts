import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		de: "Maschock",
		it: "Machoke"
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
		en: "Machop",
		it: "Machop"
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
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karateschlag",
				it: "Colpo-karate"
			},
			effect: {
				en: "Does 50 damage minus 10 for each damage counter on Machoke.",
				fr: "Inflige 50 dégâts moins 10 dégâts pour chaque marqueur de dégâts sur Machopeur.",
				de: "Fügt 50 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Maschock zu.",
				it: "Infligge 50 danni meno 10 danni per ogni segnalino danno su Machoke."
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
				en: "Submission",
				fr: "Sacrifice",
				de: "Überroller",
				it: "Sottomissione"
			},
			effect: {
				en: "Machoke does 20 damage to itself.",
				fr: "Machopeur s'inflige 20 dégâts.",
				de: "Maschock fügt sich selbst 20 Schadenspunkte zu.",
				it: "Machoke si infligge 20 danni."
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

	description: {
		fr: "Son corps est si puissant qu'il lui faut une ceinture de force pour équilibrer ses mouvements.",
		it: "Il suo corpo è talmente muscoloso che è costretto ad indossare una cintura salva-energia per regolare i suoi movimenti. LIV 40 N.67"
	},

	thirdParty: {
		cardmarket: 273729,
		tcgplayer: 42376
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
			cardPath: "data-asia/PMCG/PMCG1/055.ts"
		}
	]
}

export default card
