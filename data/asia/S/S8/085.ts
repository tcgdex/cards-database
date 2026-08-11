import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨクバリスV",
		'zh-tw': "藏飽栗鼠V",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "のしかかり",
				'zh-tw': "泰山壓頂",
			},
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
		{
			name: {
				ja: "がっつくまえば",
				'zh-tw': "貪心門牙",
			},
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。",
				'zh-tw': "從自己的牌庫抽出3張卡。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575640,
				tcgplayer: 569586,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [820],
};

export default card;
