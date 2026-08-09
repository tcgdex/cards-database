import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "オニシズクモ",
		'zh-tw': "滴蛛霸",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "脚で 水泡を 飛ばして 獲物を 包みこみ 溺れさせる。 時間を かけて 味わうのだ。",
		'zh-tw': "會用腳發射水泡，包住獵物讓其溺水， 然後花時間慢慢品嚐。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "おぼれだま",
				'zh-tw': "溺水彈",
			},
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。さらに、そのポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。再選擇1個那隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
		{
			name: {
				ja: "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
			},
			damage: 60,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667907,
				tcgplayer: 569963,
			},
		},
	],

	evolveFrom: {
		ja: "シズクモ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [752],
};

export default card;
