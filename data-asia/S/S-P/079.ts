import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ムゲンダイナV",
		'zh-tw': "皮卡丘",
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
				'zh-tw': "充電",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札から[悪]エネルギーを1枚選び、ベンチポケモンにつける。",
				'zh-tw': "從自己的牌庫選擇1張【雷】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ダイマックスほう",
				'zh-tw': "電球",
			},
			damage: "120+",
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンVMAX」なら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 468279,
				tcgplayer: 597290,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [890],
};

export default card;
