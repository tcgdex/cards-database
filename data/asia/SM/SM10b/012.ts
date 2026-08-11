import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒノヤコマ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "草むらに ひのこを まき散らす。 炎に 驚いて 飛び出してきた むしポケモンを ぱくりと いただく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ニトロチャージ" },
			damage: 20,
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分の山札にある[炎]エネルギーを1枚、このポケモンにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557203,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤヤコマ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [662],
};

export default card;
