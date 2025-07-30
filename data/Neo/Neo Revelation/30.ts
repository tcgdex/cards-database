import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Graveler",
		fr: "Gravalanch",
		de: "Georok"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Geodude",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				de: "Earthquake"
			},
			effect: {
				en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre propre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.)",
				de: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-pierre",
				de: "Rock Tumble"
			},
			effect: {
				en: "Don't apply Resistance.",
				fr: "N'appliquez pas la Résistance.",
				de: "Don't apply Resistance."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "De nature libre et peu souciante, il se moque de perdre des fragments de pierre en roulant sur les pentes des montagnes."
	},

	thirdParty: {
		cardmarket: 274616,
		tcgplayer: 85885
	}
}

export default card
