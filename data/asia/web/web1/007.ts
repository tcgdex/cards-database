import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャームレオン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [5],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スラッシュ",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				'ja-jp': "火炎放射器",
			},
			effect: {
				'ja-jp': "このポケモンから火エネルギーを捨ててください。",
			},
			damage: 50,
		},
	],

	retreat: 1,

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
