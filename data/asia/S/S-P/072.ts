import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ナックラー",
		'zh-tw': "伊布",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "砂漠に つくられた 巣穴は すり鉢の 形を しているので 落ちてしまうと 脱出不可能。",
		'zh-tw': "由於不穩定的基因，蘊含著各式各樣進化可能性的特殊寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "だいちのこどう",
				'zh-tw': "準備",
			},
			damage: "10+",
			cost: ["Fighting"],
			effect: {
				ja: "場にスタジアムが出ているなら、10ダメージ追加。",
				'zh-tw': "從自己的手牌選擇1張基本能量卡，附於這隻寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525090,
				tcgplayer: 597283,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [328],
};

export default card;
