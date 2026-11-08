import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌズリーフ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [274],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ポンド",
			},
			damage: 20,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				'ja-jp': "略奪",
			},
			effect: {
				'ja-jp': "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
