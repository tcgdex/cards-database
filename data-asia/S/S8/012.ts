import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ガーディ",
		'zh-tw': "卡蒂狗",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "忠実な 性格で 親の トレーナーを 守るため 必死に 相手に 吠えかかる。",
		'zh-tw': "性格忠誠。為了保護自己的訓練家，會拼命地朝對手狂吠。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あたためる",
				'zh-tw': "升溫",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から[炎]エネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【火】能量卡，附於自己的寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "かえん",
				'zh-tw': "烈焰",
			},
			damage: 30,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575567,
				tcgplayer: 569513,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [58],
};

export default card;
