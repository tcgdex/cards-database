import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Special Tackle",
				fr: "Charge Spéciale",
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extreme Current",
				fr: "Courant Extrême",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 90,

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
		cardmarket: 280914
	}
}

export default card
