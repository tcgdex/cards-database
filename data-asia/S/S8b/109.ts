import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ムゲンダイナV",
		'zh-tw': "無極汰那V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "パワーアクセル",
				'zh-tw': "衝力",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札から[悪]エネルギーを1枚選び、ベンチポケモンにつける。",
				'zh-tw': "若希望，從自己的手牌選擇1張【惡】能量卡，附於備戰寶可夢身上。",
			},
		},
		{
			name: {
				ja: "ダイマックスほう",
				'zh-tw': "極巨炮",
			},
			damage: "120+",
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンVMAX」なら、120ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則增加120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586625,
				tcgplayer: 571362,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [890],
};

export default card;
