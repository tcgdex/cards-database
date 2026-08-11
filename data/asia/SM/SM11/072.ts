import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケンタロス",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'ja-jp': "集団で 生活する。 群れの 中で １番 太く 長く キズだらけの ツノを持つのが ボス。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にあるたねポケモンを1枚、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "あばれタックル" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557034,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [128],
};

export default card;
