import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Mew δ",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Copy",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon’s attacks. Copy copies that attack. This attack does nothing if Mew doesn’t have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Mew performs that attack.",
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Extra Draw",
			},
			effect: {
				en: "If your opponent has any Pokémon-ex in play, search your deck for up to 2 basic Energy cards and attach them to Mew. Shuffle your deck afterward.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277485
	}
}

export default card
