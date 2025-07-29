import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Lugia",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Aerowing",
			},

			effect: {
				en: "Before doing damage, you may flip a coin. If tails, this attack does nothing. If heads, this attack does 60 damage instead.",
			},

			damage: 30
		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277484
	}
}

export default card
