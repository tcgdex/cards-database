import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カプ・コケコVMAX",
		'zh-tw': "卡璞・鳴鳴VMAX",
		'th-th': "คาปู โคเคโคVMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'ja-jp': "ダイショック",
				'zh-tw': "極巨衝擊",
				'th-th': "ไดช็อก",
			},
			damage: 180,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則將對手的戰鬥寶可夢【麻痺】。",
				'th-th': "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [ชา]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533312,
				tcgplayer: 568966,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カプ・コケコV",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [785],
};

export default card;
