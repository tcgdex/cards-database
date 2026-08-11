import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka",
		'de-de': "Meditie"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [307],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre psy",
				'de-de': "Psychoschuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Karate Chop",
				'fr-fr': "Poing-Karaté",
				'de-de': "Karateschlag"
			},
			effect: {
				'en-us': "Does 30 damage minus 10 damage for each damage counter on Meditite.",
				'fr-fr': "Inflige 30 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Meditikka.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Meditie zu."
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

	description: {
		'en-us': "It always trains deep in mountains. It levitates when it heightens its spiritual power through meditation."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87285,
				cardmarket: 278804
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278804,
				tcgplayer: 87285
			}
		},
	],

}

export default card
