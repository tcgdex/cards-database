import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "フクスロー",
		'zh-tw': "投羽梟",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "刃羽根 と 呼ばれる ナイフのような 羽根を 立て続けに 投げて 敵の 急所を 確実に つらぬく。",
		'zh-tw': "連續投出被稱為是 刃羽的刀般銳利羽毛， 能精準地貫穿敵人要害。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "だんけつのつばさ",
				'zh-tw': "團結之翼",
			},
			damage: "20×",
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×20ダメージ。",
				'zh-tw': "造成自己的棄牌區的，持有「團結之翼」招式的寶可夢卡的張數×20點傷害。",
			},
		},
		{
			name: {
				ja: "カッターウインド",
				'zh-tw': "利刃之風",
			},
			damage: 30,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773753,
				tcgplayer: 566255,
			},
		},
	],

	evolveFrom: {
		ja: "モクロー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [723],
};

export default card;
