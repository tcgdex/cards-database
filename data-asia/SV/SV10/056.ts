import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のアーボ",
		'zh-tw': "<火箭隊的>阿柏蛇",
		'zh-cn': "<火箭隊的>阿柏蛇",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "自由に あごを 外せるので 大きな 獲物でも 飲みこめるが 重くなって 動けなくなる。",
		'zh-tw': "能夠自由地讓下顎脫臼，因此 就連體型大的獵物都吞得下去， 但身體會變笨重而無法動彈。",
		'zh-cn': "能夠自由地讓下顎脫臼，因此 就連體型大的獵物都吞得下去， 但身體會變笨重而無法動彈。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あしをひっぱる",
				'zh-tw': "扯後腿",
				'zh-cn': "扯後腿",
			},
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
				'zh-cn': "咬",
			},
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821888,
				tcgplayer: 628697,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [23],
};

export default card;
