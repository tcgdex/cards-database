import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いウルサリング",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [217],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "挑発します",
			},
			effect: {
				ja: "相手の手を見てください。彼または彼女がベビーポケモンや基本的なポケモンを持っている場合、それらの数を相手のベンチに置くことができます（部屋がある限り）。その後、相手はあなたの手を見ます。そこに赤ちゃんのポケモンや基本的なポケモンがある場合、相手は任意の数をベンチに置くことができます（部屋がある限り）。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "戦いの狂乱",
			},
			effect: {
				ja: "遊びのポケモン（あなたと相手）について、コインをひっくり返します。各ヘッドについて、この攻撃はそのポケモンに20のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。",
			},
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
