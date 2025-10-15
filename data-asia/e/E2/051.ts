import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "マロワク",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [105],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "トリプルボーン",
			},
			effect: {
				ja: "対戦相手のベンチポケモンを1つ選択します。 3コインをフリップします。この攻撃は、そのポケモンにヘッド数を10回ダメージします。衰弱と抵抗を適用しないでください。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "骨ラッシュ",
			},
			effect: {
				ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
