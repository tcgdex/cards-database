import { Card } from "models/database/card";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ファイアロー",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "好物は キャモメや ツツケラ。 強烈な キックを お見舞いし 鋭いツメで がっちり キャッチ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ニトロチャージ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にある[炎]エネルギーを1枚、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "エアロループ" },
			damage: 90,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、すべて手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561450,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒノヤコマ",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [663],
};

export default card;
