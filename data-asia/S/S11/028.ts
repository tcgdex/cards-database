import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ネオラント",
		'zh-tw': "霓虹魚",
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "深海の 海底を はうように 泳ぐ。 幻想的な ヒレの 光は 夜空の 星の よう。",
		'zh-tw': "像爬行般地在海底游動。鰭發出的光充滿奇幻氣氛， 就像夜空中的星星一樣。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きままにおよぐ",
				'zh-tw': "隨興游水",
			},
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			},
		},
		{
			name: {
				ja: "たきのぼり",
				'zh-tw': "攀瀑",
			},
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667903,
				tcgplayer: 569959,
			},
		},
	],

	evolveFrom: {
		ja: "ケイコウオ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [457],
};

export default card;
