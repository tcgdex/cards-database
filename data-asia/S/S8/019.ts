import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "スターミー",
		'zh-tw': "寶石海星",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "幾何学的な ボディを 回転し 水中を 泳ぐ。 常に 謎の 電波を 発信して いるらしい。",
		'zh-tw': "會轉動像幾何圖形般的身體在水中游動。似乎一直在發射神秘的電波。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "れんだんスター",
				'zh-tw': "連彈星星",
			},
			cost: ["Water"],
			effect: {
				ja: "このポケモンについている[水]エネルギーを好きなだけトラッシュし、その枚数ぶん、相手のポケモンを選ぶ（1匹を2回以上選べる）。その後、選んだポケモン全員に、弱点・抵抗力を計算せず、選んだ回数×30ダメージ。",
				'zh-tw': "將這隻寶可夢身上附加的任意數量的【水】能量卡丟棄，以其張數選擇對手的寶可夢（1隻可選擇2次以上）。然後，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575574,
				tcgplayer: 569520,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトデマン",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [121],
};

export default card;
