import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Seviper",
		de: "Vipitis"
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
				de: "Giftansammlung"
			},
			effect: {
				en: "Seviper is now Poisoned.",
				fr: "Seviper est maintenant Empoisonné.",
				de: "Vipitis ist jetzt vergiftet."
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
				de: "Gift-Effekt"
			},
			effect: {
				en: "If Seviper is Poisoned, this attack does 20 damage plus 60 more damage and remove the Special Condition Poisoned from Seviper.",
				fr: "Si Seviper est Empoisonné, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires. Retirez ensuite l’État Spécial Empoisonné de Seviper.",
				de: "Wenn Vipitis vergiftet ist, fügt dieser Angriff 20 Schadenspunkte plus 60 weitere Schadenspunkte zu; entferne den Speziellen Zustand \"Vergiftet\" von Vipitis."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 279694
	}
}

export default card
