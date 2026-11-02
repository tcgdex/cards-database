import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロロン",
		'zh-tw': "噗隆隆",
		th: "โบรรอน",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "鋼の 体が 本体。 岩に 張りつき その成分を エネルギーに 変えて 活動する。",
		'zh-tw': "鋼鐵身軀才是本體。 會貼在岩石上將其成分 轉換成活動用的能量。",
		th: "ร่างที่แท้จริงคือส่วนที่เป็นเหล็ก เกาะติดอยู่กับหินแล้วเปลี่ยนส่วนประกอบนั้นให้เป็นพลังงานที่ใช้ในการขับเคลื่อน",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "メタルコーティング",
				'zh-tw': "金屬塗層",
				th: "เมทัลโค้ตติ้ง",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから「基本[M]エネルギー」を1枚選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇1張「基本【鋼】能量」卡，附於這隻寶可夢身上。",
				th: "เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			},
		},
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
				th: "กระแทก",
			},
			damage: 50,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767170,
				tcgplayer: 568067,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [965],
};

export default card;
