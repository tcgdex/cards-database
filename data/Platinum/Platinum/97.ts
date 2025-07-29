import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sing",
				fr: "Berceuse",
				de: "Sing"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Run Around",
				fr: "Courir dans tous les sens",
				de: "Run Around"
			},
			effect: {
				en: "You may switch Swablu with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Tylton avec 1 des Pokémon de votre Banc.",
				de: "You may switch Swablu with 1 of your Benched Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278421
	}
}

export default card
