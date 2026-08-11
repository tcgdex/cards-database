import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'de-de': "Relaxo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rest Up",
				'fr-fr': "Repos",
				'de-de': "Rest Up"
			},
			effect: {
				'en-us': "If Snorlax remains Asleep between turns, remove 2 damage counters from Snorlax (remove 1 if there is only 1).",
				'fr-fr': "Si Ronflex reste Endormi entre deux tours, retirez-lui 2 marqueurs de dégât (ou un s'il n'y en a qu'un).",
				'de-de': "If Snorlax remains Asleep between turns, remove 2 damage counters from Snorlax (remove 1 if there is only 1.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collapse",
				'fr-fr': "Effondrement",
				'de-de': "Collapse"
			},
			effect: {
				'en-us': "Snorlax is now asleep.",
				'fr-fr': "Ronflex est maintenant Endormi.",
				'de-de': "Snorlax is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Toss and Turn",
				'fr-fr': "Retournement",
				'de-de': "Toss and Turn"
			},
			effect: {
				'en-us': "If Snorlax is Asleep, this attack does 30 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)",
				'fr-fr': "Si Ronflex est Endormi, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. (Cette attaque peut être utilisée même si Ronflex est Endormi.)",
				'de-de': "If Snorlax is Asleep, this attack does 30 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)"
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276191,
				tcgplayer: 89388
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276191,
				tcgplayer: 89388
			},
		}
	]
}

export default card
