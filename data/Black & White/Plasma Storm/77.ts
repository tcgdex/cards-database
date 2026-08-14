import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Kick",
				fr: "Koud'Pied",
				de: "Tritt"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Cross",
				fr: "Passage Éclair",
				de: "Tempo-Cross"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "A well-trained one can sense auras to identify and take in the feelings of creatures over half a mile away.",
		de: "Ist es trainiert, spürt es Auren, um Gefühle entfernter Kreaturen zu erkennen und aufzunehmen."
	},

	thirdParty: {
		cardmarket: 280817,
		tcgplayer: 86883
	}
}

export default card
