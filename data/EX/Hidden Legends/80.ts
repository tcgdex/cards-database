import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recharge",
				fr: "Recharger",
				de: "Recharge"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to Voltorb. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie  et attachez-la à Voltorbe. Ensuite, mélangez votre deck.",
				de: "Search your deck for a  Energy card and attach it to Voltorb. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
				fr: "Attaque qui roule",
				de: "Rolling Attack"
			},

			damage: 20,

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
		cardmarket: 276154,
		tcgplayer: 90413
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
