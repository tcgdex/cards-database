import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "Koga's Forretress",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [205],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "ダブルエッジ",
			},
			effect: {
				ja: "KogaのForretressは、それ自体に20のダメージを与えます。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
