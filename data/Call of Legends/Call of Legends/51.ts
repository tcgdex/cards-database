import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Seviper",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		336,
	],
	hp: 90,
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
				en: "Poison Buildup",
				fr: "Empoisonnement",
			},
			effect: {
				en: "Seviper is now Poisoned.",
				fr: "Seviper est maintenant Empoisonné.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Effect",
				fr: "Effets du poison",
			},
			effect: {
				en: "If Seviper is Poisoned, this attack does 20 damage plus 60 more damage and remove the Special Condition Poisoned from Seviper.",
				fr: "Si Seviper est Empoisonné, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires. Retirez ensuite l’État Spécial Empoisonné de Seviper.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
