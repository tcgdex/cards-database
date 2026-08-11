import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダークオマスター",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [139],
	hp: 70,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "先史時代の水",
			},
			effect: {
				'ja-jp': "相手が進化したポケモンをプレイしている場合は、1つを選択してコインをひっくり返します。頭の場合、対戦相手はそのポケモンで最高のステージ進化カードを取り、それを彼または彼女のデッキにシャッフルします。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "暗い触手",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中、防御するポケモンは攻撃やポケモンの力の影響を除いて進化することはできません。 （ポケモンがこの効果を終了することをベンチに入れてください。）",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
