import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Kricketot",
		fr: "Crikzik",
		de: "Zirpurze"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		401,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Lullaby",
				fr: "Comptine",
				de: "Lullaby"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Rollout"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278499
	}
}

export default card
