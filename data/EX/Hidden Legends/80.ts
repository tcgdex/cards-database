import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe"
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
				fr: "Recharger"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to Voltorb. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie  et attachez-la à Voltorbe. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
				fr: "Attaque qui roule"
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





}

export default card
