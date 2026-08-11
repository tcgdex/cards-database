import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マリィのオーロンゲex",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パンクアップ" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「基本[D]エネルギー」を5枚まで選び、自分の「マリィのポケモン」に好きなようにつける。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シャドーバレット" },
			damage: 180,
			cost: ["Darkness", "Darkness"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861486,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マリィのギモー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [861],

	suffix: "EX",
};

export default card;
