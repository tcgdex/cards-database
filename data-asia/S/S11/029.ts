import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "キュレムV",
		'zh-tw': "酋雷姆V",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きゅうげきれいとう",
				'zh-tw': "急遽冰凍",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の手札から[W]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。",
				'zh-tw': "從自己的手牌選擇任意數量的【水】能量卡，以任意方式附於自己的寶可夢身上。",
			},
		},
		{
			name: {
				ja: "フロストスマッシュ",
				'zh-tw': "冰霜粉碎",
			},
			damage: 140,
			cost: ["Water", "Water", "Water"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667904,
				tcgplayer: 569960,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [646],
};

export default card;
