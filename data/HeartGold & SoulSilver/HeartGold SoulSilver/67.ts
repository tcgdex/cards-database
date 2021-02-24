import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		187,
	],
	hp: 30,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bounce",
				fr: "Faire des bonds",
			},
			effect: {
				en: "You may switch Hoppip with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Granivol contre un Pokémon de votre Banc.",
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
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
