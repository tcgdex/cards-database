import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'de-de': "Wailmer"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [320],

	hp: 80,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'de-de': "Rest"
			},
			effect: {
				'en-us': "Remove all Special Conditions and 4 damage counters from Wailmer (all if there are less than 4). Wailmer is now Asleep.",
				'fr-fr': "Retirez à Wailmer tous ses États Spéciaux ainsi que 4 marqueurs de dégât (si Wailmer a moins de dégâts que cela, retirez-les lui tous). Wailmer est maintenant Endormi.",
				'de-de': "Remove all Special Conditions and 4 damage counters from Wailmer. (all if there are less than 4). Wailmer is now Asleep."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Water Gun"
			},
			effect: {
				'en-us': "This attack does 20 damage plus 10 more damage for each Water Energy attached to Wailmer but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Wailmer qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "This attack does 20 damage plus 10 more damage for each  Energy attached to Wailmer but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275696,
				tcgplayer: 90450
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275696,
				tcgplayer: 90450
			}
		},
	],

}

export default card
