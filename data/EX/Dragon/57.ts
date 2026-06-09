import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'face",
				de: "Pound"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Spurt",
				fr: "Jet de poison",
				de: "Poison Spurt"
			},
			effect: {
				en: "Discard a Grass Energy card attached to Grimer. The Defending Pokémon is now Poisoned.",
				fr: "Défaussez une carte Énergie  attachée à Tadmorv. Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Discard a  Energy card attached to Grimer. The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 85908,
		cardmarket: 275934
	}
}

export default card
