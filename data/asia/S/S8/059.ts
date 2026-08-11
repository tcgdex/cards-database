import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ジグザグマ",
		'zh-tw': "伽勒爾 蛇紋熊",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "この姿が いちばん 古い ジグザグマの 姿 らしい。 ジグザグ動いて あたりを 荒らす。",
		'zh-tw': "這似乎是蛇紋熊最古老的樣子。會之字形亂走，把周圍弄得一團糟。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "したでなめる",
				'zh-tw': "舌舔",
			},
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575614,
				tcgplayer: 569560,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [263],
};

export default card;
