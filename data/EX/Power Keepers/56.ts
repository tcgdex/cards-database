import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita",
		de: "Amonitas"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Mysterious Fossil",
		fr: "Mystérieux fossile"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Influence",
				fr: "Influencer",
				de: "Einfluss"
			},
			effect: {
				en: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
				fr: "Cherchez dans votre deck Amonita, Kabuto, Ptera, Lilia ou Anorith et placez 2 d'entre eux sur votre Banc. Ensuite, mélangez votre deck. Traitez les nouveaux Pokémon de Banc comme des Pokémon de base.",
				de: "Durchsuche dein Deck nach Amonitas, Kabuto, Aerodactyl, Liliep oder Anorith und lege bis zu 2 von ihnen auf deine Bank. Mische danach dein Deck. Behandle die neuen Pokémon wie Basis-Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de boue",
				de: "Lehmschuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277362,
		tcgplayer: 87859
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

