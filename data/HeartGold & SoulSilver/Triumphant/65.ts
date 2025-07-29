import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Kricketot",
		fr: "Crikzik",
		de: "Zirpurze"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		401,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				de: "Verprügler"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When its antennae hit each other, it sounds like the music of a xylophone."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279595
	}
}

export default card
