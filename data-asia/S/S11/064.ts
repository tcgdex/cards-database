import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "シロデスナ",
		'zh-tw': "噬沙堡爺",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "ビーチの 悪夢とも 呼ばれる。 砂を 操って 獲物を 沈め 魂を 吸い取る。",
		'zh-tw': "也被稱為「海灘惡夢」。會操控沙子淹沒獵物， 然後吸取對方的靈魂。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "すなつぼじごく",
				'zh-tw': "沙壺地獄",
			},
			cost: ["Fighting"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的所有寶可夢各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "ランドクラッシュ",
				'zh-tw': "大地粉碎",
			},
			damage: 120,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667939,
				tcgplayer: 569995,
			},
		},
	],

	evolveFrom: {
		ja: "スナバァ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [770],
};

export default card;
