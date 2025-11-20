import { Card } from '../../../interfaces'
import Set from '../Base Set'
import AsianCard from "../../../data-asia/PMCG/PMCG1/065.ts";

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
		de: "Dratini"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras' Face",
				de: "Pfund"
			},

			damage: 10,

		},
	],

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
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Longtemps considéré comme légendaire, une colonie fut découverte dans les océans."
	},

	thirdParty: {
		cardmarket: 273721,
		tcgplayer: 42367
	},

	related: [
		{
			type: "translation",
			card: AsianCard
		}
	]
}

export default card
