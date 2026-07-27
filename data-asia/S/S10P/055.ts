import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒメグマ",
		'zh-tw': "熊寶寶",
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "掌に 染む 甘き蜜を 舐める 仕草。 ミツハニー 集めし 蜜を 巣より 頂戴し 我がものとする したたかさ。",
		'zh-tw': "總是舔舐著滲入掌中的香甜蜜汁。三蜜蜂積蓄在巢中的花蜜時常 被牠毫不客氣地佔為己有。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エサひろい",
				'zh-tw': "撿飼料",
			},
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、自分のトラッシュからグッズを1枚選び、相手に見せて、手札に加える。",
				'zh-tw': "擲1次硬幣若為正面，則從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。",
			},
		},
		{
			name: {
				ja: "ツメをたてる",
				'zh-tw': "豎爪",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651114,
				tcgplayer: 569898,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [216],
};

export default card;
