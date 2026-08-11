import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒトデマン",
		'zh-tw': "海星星",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "いくら 傷ついても 平気。 再生能力が 高いので 半日ぐらいで 元に 戻るぞ。",
		'zh-tw': "不管受多少傷都不怕。由於再生能力很強，只要半天左右就會復原。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "みずにひたる",
				'zh-tw': "泡水",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の手札から[水]エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "從自己的手牌選擇1張【水】能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				'ja-jp': "かいてんアタック",
				'zh-tw': "迴轉攻擊",
			},
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575573,
				tcgplayer: 569519,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [120],
};

export default card;
