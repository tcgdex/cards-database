import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレム",
		'zh-tw': "恰雷姆",
		'zh-cn': "恰雷姆",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測する ことが できるのだ。",
		'zh-tw': "可以用藉由瑜珈修行 鍛鍊出來的精神力量， 來預測對手的行動。",
		'zh-cn': "可以用藉由瑜珈修行 鍛鍊出來的精神力量， 來預測對手的行動。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "あいきしょう",
				'zh-tw': "合氣掌",
				'zh-cn': "合氣掌",
			},
			damage: "50+",
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、120ダメージ追加。",
				'zh-tw': "若這隻寶可夢與對手的戰鬥寶可夢身上附加的能量數量相同，則增加120點傷害。",
				'zh-cn': "若這隻寶可夢與對手的戰鬥寶可夢身上附加的能量數量相同，則增加120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821886,
				tcgplayer: 628695,
			},
		},
	],

	evolveFrom: {
		ja: "アサナン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [308],
};

export default card;
