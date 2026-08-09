import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "アチャモ",
		'zh-tw': "火稚雞",
		'zh-cn': "火稚雞",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "お腹に 炎袋を 持つ。 抱きしめると ぽかぽか 温かい。 命ある 限り 燃え続ける。",
		'zh-tw': "肚子裡有火袋。 抱在懷裡暖烘烘的很溫暖。 只要生命尚存火焰就會持續燃燒。",
		'zh-cn': "肚子裡有火袋。 抱在懷裡暖烘烘的很溫暖。 只要生命尚存火焰就會持續燃燒。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もってくる",
				'zh-tw': "呼喚",
				'zh-cn': "呼喚",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "從自己的牌庫抽出1張卡。",
				'zh-cn': "從自己的牌庫抽出1張卡。",
			},
		},
		{
			name: {
				ja: "かえん",
				'zh-tw': "烈焰",
				'zh-cn': "烈焰",
			},
			damage: 10,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821849,
				tcgplayer: 628659,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [255],
};

export default card;
