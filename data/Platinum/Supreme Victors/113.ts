import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Meditite",
		fr: "Meditikka",
		de: "Meditie"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre psy",
				de: "Psychoschuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karateschlag"
			},
			effect: {
				en: "Does 30 damage minus 10 damage for each damage counter on Meditite.",
				fr: "Inflige 30 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Meditikka.",
				de: "Dieser Angriff fügt 30 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Meditie zu."
			},
			damage: "30-",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278804
	}
}

export default card
