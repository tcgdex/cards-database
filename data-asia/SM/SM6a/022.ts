import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミロカロス",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "澄んだ 湖の 底に 棲む。 戦争が 起こるとき 現れ 人々の 心を いやす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "オーロラウェーブ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "アクアスプリット" },
			damage: 40,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559275,
			},
		},
	],

	evolveFrom: {
		ja: "ヒンバス",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [350],
};

export default card;
