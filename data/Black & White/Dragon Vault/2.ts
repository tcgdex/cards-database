import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hypnotic Gaze",
				fr: "Regard Hypnotique",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281001
	}
}

export default card
