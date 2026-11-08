import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニゴーリ",
		'zh-tw': "冰鬼護",
		'th-th': "โอนิโกริ",
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "空気中の 水分を 一瞬で 凍らせることで 獲物が 逃げられないように する。",
		'zh-tw': "會透過瞬間凍結 空氣中的水分， 使獵物無法逃脫。",
		'th-th': "ทำให้เหยื่อไม่สามารถหนีได้โดยการแช่แข็งน้ำในอากาศในชั่วพริบตา",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ダメージビート",
				'zh-tw': "傷害律動",
				'th-th': "แดเมจบีต",
			},
			damage: "20×",
			cost: ["Water"],
			effect: {
				'ja-jp': "相手のバトルポケモンにのっているダメカンの数×20ダメージ。",
				'zh-tw': "造成對手的戰鬥寶可夢身上放置的傷害指示物的數量×20點傷害。",
				'th-th': "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x20",
			},
		},
		{
			name: {
				'ja-jp': "クレイジーヘッズ",
				'zh-tw': "瘋狂頭",
				'th-th': "เครซีเฮด",
			},
			damage: 140,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767125,
				tcgplayer: 568022,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ユキワラシ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [362],
};

export default card;
