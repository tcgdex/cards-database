import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Seviper",
		'fr-fr': "Seviper",
		'de-de': "Vipitis"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [336],

	hp: 90,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Poison Buildup",
				'fr-fr': "Empoisonnement",
				'de-de': "Giftansammlung"
			},
			effect: {
				'en-us': "Seviper is now Poisoned.",
				'fr-fr': "Seviper est maintenant Empoisonné.",
				'de-de': "Vipitis ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Effect",
				'fr-fr': "Effets du poison",
				'de-de': "Gift-Effekt"
			},
			effect: {
				'en-us': "If Seviper is Poisoned, this attack does 20 damage plus 60 more damage and remove the Special Condition Poisoned from Seviper.",
				'fr-fr': "Si Seviper est Empoisonné, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires. Retirez ensuite l’État Spécial Empoisonné de Seviper.",
				'de-de': "Wenn Vipitis vergiftet ist, fügt dieser Angriff 20 Schadenspunkte plus 60 weitere Schadenspunkte zu; entferne den Speziellen Zustand \"Vergiftet\" von Vipitis."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,

	description: {
		'en-us': "In battle, it uses its bladed tail to counter any Zangoose. It secretes a deadly venom in its tail.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89088,
				cardmarket: 279694
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89088,
				cardmarket: 279694
			},
		},
	],

}

export default card
