import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リザード",
		'zh-tw': "火恐龍",
		'th-th': "ลิซาร์โดะ",
		'id-id': "Charmeleon",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'ja-jp': "戦いで 気持ちが たかぶると 灼熱の 炎を 吹きながら あたりを 燃やしてまわる。",
		'zh-tw': "如果牠在戰鬥中亢奮起來，就會噴出灼熱的火焰，把周圍的東西燒得一乾二淨。",
		'th-th': "เมื่อตื่นเต้นจากการต่อสู้จะพ่นเปลวเพลิงร้อนแรงแผดเผารอบข้าง",
		'id-id': "Ketika pertarungan membuat semangat Charmeleon bergejolak, Pokémon ini meniupkan api berpijar dan membakar daerah sekelilingnya.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "かえん",
				'zh-tw': "烈焰",
				'th-th': "เผาไหม้",
				'id-id': "Lidah Api",
			},
			damage: 20,
			cost: ["Fire"],
		},
		{
			name: {
				'ja-jp': "だいもんじ",
				'zh-tw': "大字爆炎",
				'th-th': "เพลิงอัคคี",
				'id-id': "Ledakan Api Besar",
			},
			damage: 90,
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
				'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719622,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒトカゲ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Illustration rare",
	dexId: [5],
};

export default card;
