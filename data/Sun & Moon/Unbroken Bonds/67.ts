import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},
	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		92,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swelling Spite",
				fr: "Mépris Montant",
			},
			effect: {
				en: "When this Pokémon is Knocked Out, search your deck for up to 2 Haunter and put them onto your Bench. Then, shuffle your deck.",
				fr: "Lorsque ce Pokémon est mis K.O., cherchez jusqu’à 2 Spectrum dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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
