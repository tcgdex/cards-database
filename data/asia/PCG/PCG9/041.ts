import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シードラ（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [117],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "煙幕",
			},
			effect: {
				'ja-jp': "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "かみそりの翼",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
