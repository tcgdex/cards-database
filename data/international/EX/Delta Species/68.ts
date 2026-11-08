import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Eevee δ",
		'fr-fr': "Evoli δ",
		'de-de': "Evoli"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Metal Scoop",
				'fr-fr': "Pelle métallique",
				'de-de': "Metal Scoop"
			},
			effect: {
				'en-us': "Search your discard pile for a Metal Energy card and attach it to Eevee.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie  et attachez-la à Evoli.",
				'de-de': "Search your discard pile for a  Energy card and attach it to Eevee."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276831
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		},
	]
}

export default card
