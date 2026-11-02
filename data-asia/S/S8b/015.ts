import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
		'zh-tw': "小火龍",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "熱いものを 好む 性格。 雨に濡れると しっぽの 先から 煙が 出るという。",
		'zh-tw': "天生喜歡熱熱的東西。據說當牠被雨淋濕的時候，尾巴的末端會冒出煙來。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もってくる",
				'zh-tw': "呼喚",
			},
			cost: ["Fire"],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "從自己的牌庫抽出1張卡。",
			},
		},
		{
			name: {
				ja: "ほのお",
				'zh-tw': "火焰",
			},
			damage: 30,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586530,
				tcgplayer: 571268,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578361,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [4],
};

export default card;
