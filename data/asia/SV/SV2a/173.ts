import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウ",
		'zh-tw': "皮卡丘",
		'th-th': "พิคาชู",
		'id-id': "Pikachu",
	},

	illustrator: "Hiroyuki Yamamoto",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
		'zh-tw': "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力一口氣釋放出來。",
		'th-th': "ที่แก้มทั้งสองข้างมีถุงสำหรับเก็บไฟฟ้า พอโกรธจะปล่อยไฟฟ้าที่เก็บเอาไว้ออกมาในรวดเดียว",
		'id-id': "Pikachu memiliki kantong penampung listrik di kedua pipinya. Ketika marah, Pokémon ini mengeluarkan seluruh listrik yang telah terkumpul.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "じゅうでん",
				'zh-tw': "充電",
				'th-th': "ชาร์จ",
				'id-id': "Charge",
			},
			cost: ["Lightning"],
			effect: {
				'ja-jp': "自分の山札から「基本[L]エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張「基本【雷】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
				'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
				'id-id': "Pilih 1 lembar Energi Dasar {Listrik} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				'ja-jp': "ピカパンチ",
				'zh-tw': "皮卡拳",
				'th-th': "พิคาพันช์",
				'id-id': "Pika Punch",
			},
			damage: 50,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719626,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Illustration rare",
	dexId: [25],
};

export default card;
