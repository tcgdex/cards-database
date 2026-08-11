import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハスボー",
		'zh-tw': "蓮葉童子",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "葉っぱが 大きく なりすぎて 重くなって しまったため 水に 浮かんで 暮らすように なった。",
		'zh-tw': "因為葉子長得太大太重，所以才會改變習性，漂浮在水面上生活。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "なかまをよぶ",
				'zh-tw': "呼朋引伴",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				'ja-jp': "みずかけ",
				'zh-tw': "潑水",
			},
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571584,
				tcgplayer: 569325,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [270],
};

export default card;
