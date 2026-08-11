import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マイティエナ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [262],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				'ja-jp': "デルタファン",
			},
			effect: {
				'ja-jp': "防御ポケモンがポケモンエクスの場合、そのポケモンは相手の次のターン中に攻撃できません。",
			},
			damage: 20,
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				'ja-jp': "ギャングアップ",
			},
			effect: {
				'ja-jp': "闇のポケモンとメタルポケモンの数を10回ダメージします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
