import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Division",
				fr: "Division",
				de: "Division"
			},
			effect: {
				en: "Search your deck for Grimer and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Tadmorv dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Search your deck for Grimer and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Gas",
				fr: "Gaz toxik",
				de: "Poison Gas"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278496,
		tcgplayer: 85912
	}
}

export default card
