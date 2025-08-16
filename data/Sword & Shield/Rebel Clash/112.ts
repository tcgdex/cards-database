import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [109],

	name: {
		en: "Koffing",
		fr: "Smogo",
		es: "Koffing",
		it: "Koffing",
		pt: "Koffing",
		de: "Smogon"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Suffocating Gas",
				fr: "Gaz Suffocant",
				es: "Gas Sofocante",
				it: "Gas Soffocante",
				pt: "Gás Asfixiante",
				de: "Würgegas"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Darkness"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash."
	},

	thirdParty: {
		cardmarket: 457968,
		tcgplayer: 213204
	}
}

export default card
