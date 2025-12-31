import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Luxray GL",
		fr: "Luxray  Niv. 48",
		de: "Luxtra GL"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trash Bolt",
				fr: "Éclair saccageant",
				de: "Abfallblitz"
			},
			effect: {
				en: "Discard an Energy card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
				fr: "Défaussez une carte Énergie de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet).",
				de: "Lege 1 Energiekarte von deiner Hand auf deinen Ablagestapel. (Wenn du das nicht machen kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 86951
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type: "holo",
			stamp: ["stephen-silvestro"]
		},
		{
			type: "holo",
			stamp: ["mychael-bryan"]
		},
		{
			type: "holo",
			stamp: ["yuta-komatsuda"]
		},
	]
}

export default card
