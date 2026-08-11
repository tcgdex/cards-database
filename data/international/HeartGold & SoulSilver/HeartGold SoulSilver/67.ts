import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'de-de': "Hoppspross"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [187],

	hp: 30,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bounce",
				'fr-fr': "Faire des bonds",
				'de-de': "Sprungfeder"
			},
			effect: {
				'en-us': "You may switch Hoppip with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Granivol contre un Pokémon de votre Banc.",
				'de-de': "Du kannst Hoppspross gegen 1 Pokémon auf deiner Bank austauschen."
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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To keep from being blown away by the wind, they gather in clusters. But they do enjoy gentle breezes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86182,
				cardmarket: 279039
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86182,
				cardmarket: 279039
			}
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"],
			thirdParty: {
				tcgplayer: 480053,
				cardmarket: 279039
			}
		},
	],

}

export default card
