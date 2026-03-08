import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Silcoon",
		fr: "Armulys",
		de: "Schaloko"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		266,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ram"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Advanced Armor",
				fr: "Super armure",
				de: "Advanced Armor"
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to Silcoon by your opponent's Evolved Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, prévenez tous les effets d'attaque, dégâts inclus, infligés à Armulys par le Pokémon Évolué de votre adversaire.",
				de: "During your opponent's next turn, prevent all effects of attacks, including damage, done to Silcoon by your opponent's Evolved Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 89211,
		cardmarket: 276449
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
