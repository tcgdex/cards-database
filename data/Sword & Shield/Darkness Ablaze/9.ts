import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [616],

	name: {
		en: "Shelmet",
		fr: "Escargaume",
		es: "Shelmet",
		it: "Shelmet",
		pt: "Shelmet",
		de: "Schnuthelm"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spray Fluid",
				fr: "Fluide Éclaboussant",
				es: "Fluido Rociado",
				it: "Fluidospray",
				pt: "Fluido Spray",
				de: "Sprühwasser"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When attacked, it tightly shuts the lid of its shell. This reaction fails to protect it from Karrablast, however, because they can still get into the shell."
	},

	thirdParty: {
		cardmarket: 482919,
		tcgplayer: 219081
	}
}

export default card
