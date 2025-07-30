import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		de: "Smogmog"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Super Poison Breath",
				fr: "Super haleine empoisonnée",
				de: "Super-Gifthauch"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Explosion",
				fr: "Super explosion",
				de: "Super-Explosion"
			},
			effect: {
				en: "Weezing does 90 damage to itself, and don’t apply Weakness to this damage.",
				fr: "Smogogo s’inflige 90 dégâts et n’appliquez pas la Faiblesse à ces dégâts.",
				de: "Smogmog fügt sich selbst 90 Schadenspunkte zu, wende dabei Schwäche nicht an."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279006
	}
}

export default card
