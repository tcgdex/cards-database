import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダース",
		'zh-tw': "多邊獸Ⅱ",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "細胞が 出している 弱い 電気を ひとまとめにして 強力な 電撃を 放つ。",
		'zh-tw': "搭載了ＡＩ功能後，開始 說起了只有多邊獸Ⅱ彼此 之間才能了解的神秘語言。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かみなりのキバ",
				'zh-tw': "力量球",
			},
			damage: 60,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708479,
				tcgplayer: 587822,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [135],
};

export default card;
