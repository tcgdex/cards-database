import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
		de: "Hoppspross"
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
				de: "Sprungfeder"
			},
			effect: {
				en: "You may switch Hoppip with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Granivol contre un Pokémon de votre Banc.",
				de: "Du kannst Hoppspross gegen 1 Pokémon auf deiner Bank austauschen."
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
		en: "To keep from being blown away by the wind, they gather in clusters. But they do enjoy gentle breezes."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp : ["yuka-furusawa"],
		}
	],

	thirdParty: {
		cardmarket: 279039,
		tcgplayer: 86182
	}
}

export default card
