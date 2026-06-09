import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		de: "Relaxo"
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
				en: "Rest Up",
				fr: "Repos",
				de: "Rest Up"
			},
			effect: {
				en: "If Snorlax remains Asleep between turns, remove 2 damage counters from Snorlax (remove 1 if there is only 1).",
				fr: "Si Ronflex reste Endormi entre deux tours, retirez-lui 2 marqueurs de dégât (ou un s'il n'y en a qu'un).",
				de: "If Snorlax remains Asleep between turns, remove 2 damage counters from Snorlax (remove 1 if there is only 1.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collapse",
				fr: "Effondrement",
				de: "Collapse"
			},
			effect: {
				en: "Snorlax is now asleep.",
				fr: "Ronflex est maintenant Endormi.",
				de: "Snorlax is now Asleep."
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
				en: "Toss and Turn",
				fr: "Retournement",
				de: "Toss and Turn"
			},
			effect: {
				en: "If Snorlax is Asleep, this attack does 30 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)",
				fr: "Si Ronflex est Endormi, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. (Cette attaque peut être utilisée même si Ronflex est Endormi.)",
				de: "If Snorlax is Asleep, this attack does 30 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)"
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

	thirdParty: {
		cardmarket: 276191,
		tcgplayer: 89388
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
