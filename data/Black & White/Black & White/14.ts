import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
		es: "Sawsbuck",
		it: "Sawsbuck",
		pt: "Sawsbuck",
		de: "Kronjuwild"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		586,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nature Power",
				fr: "Force-Nature",
			},
			effect: {
				en: "Does 10 more damage for each Grass Energy attached to both your and your opponent's Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Grass attachée à vos Pokémon et à ceux de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Leech",
				fr: "Encornebois",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279752
	}
}

export default card
