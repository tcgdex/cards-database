import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキハミ",
		'zh-tw': "雪吞蟲",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],

	description: {
		ja: "地面に 積もった 雪を 食べる。 たくさん 食べれば 食べるほど 背中の 棘は 立派に 育つ。",
		'zh-tw': "會吃地面上的積雪。吃得越多，背上的刺就會長得越挺拔。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "アイスコール",
				'zh-tw': "冰之呼喚",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の山札から[水]エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【水】能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575583,
				tcgplayer: 569529,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [872],
};

export default card;
