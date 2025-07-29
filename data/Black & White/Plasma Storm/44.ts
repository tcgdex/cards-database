import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Sound",
				fr: "Strido-Son",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280784
	}
}

export default card
