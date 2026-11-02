import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "アルクジラ",
		'zh-tw': "走鯨",
		'zh-cn': "走鯨",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "遥か 昔に 海から 上がって 陸地で 暮らすようになった。 ホエルコに 近い 種類らしい。",
		'zh-tw': "遠古時代自大海上岸後， 就開始在陸地上生活。 似乎與吼吼鯨是相近的物種。",
		'zh-cn': "遠古時代自大海上岸後， 就開始在陸地上生活。 似乎與吼吼鯨是相近的物種。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっぱたく",
				'zh-tw': "重摑",
				'zh-cn': "重摑",
			},
			damage: 30,
			cost: ["Water", "Colorless"],
		},
		{
			name: {
				ja: "フロストスマッシュ",
				'zh-tw': "冰霜粉碎",
				'zh-cn': "冰霜粉碎",
			},
			damage: 80,
			cost: ["Water", "Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821863,
				tcgplayer: 628672,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [974],
};

export default card;
