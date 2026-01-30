import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Eevee δ",
		fr: "Evoli δ",
		de: "Evoli"
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
				en: "Metal Scoop",
				fr: "Pelle métallique",
				de: "Metal Scoop"
			},
			effect: {
				en: "Search your discard pile for a Metal Energy card and attach it to Eevee.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie  et attachez-la à Evoli.",
				de: "Search your discard pile for a  Energy card and attach it to Eevee."
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
