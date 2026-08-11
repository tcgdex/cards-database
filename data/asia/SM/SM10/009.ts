import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウインディ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "大昔に とある 武将と ともに 戦い 国を 治めた という 伝説が 残されている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "グランドフレイム" },
			damage: 120,
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				'ja-jp': "自分のトラッシュにある[炎]エネルギーを2枚、ベンチポケモン1匹につける。",
			},
		},
		{
			name: { ja: "ヒートタックル" },
			damage: 190,
			cost: ["Fire", "Fire", "Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンにも50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557364,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ガーディ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [59],
};

export default card;
