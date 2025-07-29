import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Moonlight",
				fr: "Rayon Lune",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288488
	}
}

export default card
