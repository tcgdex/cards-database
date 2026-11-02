import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
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
				en: "Bind Wound",
				fr: "Blessure Pansée",
				de: "Wunden verbinden"
			},
			effect: {
				en: "Heal 20 damage from 1 of your Pokémon.",
				fr: "Soignez 20 dégâts à l'un de vos Pokémon.",
				de: "Heile 20 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Wings and beaks. I like yours, and I like mine, too.",
		de: "Flügel und Schnäbel. Ich mag deine und auch meine."
	},

	thirdParty: {
		cardmarket: 288532
	}
}

export default card
