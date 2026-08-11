import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [231],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of damage counters on Phanpy.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Phanpy.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Phanpy zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87998,
				cardmarket: 275175
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87998,
				cardmarket: 275175
			}
		},
	]
}

export default card
