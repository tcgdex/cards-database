import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタグロス",
		'zh-tw': "巨金怪",
		'th-th': "เมทากรอส",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'ja-jp': "気温が 氷点下になると 磁力が 強まるので 雪山に 棲む メタグロスは とても 元気。",
		'zh-tw': "當氣溫下降到低於冰點時，磁力就會變強。因此棲息在 雪山裡的巨金怪非常有活力。",
		'th-th': "เมื่ออุณหภูมิของอากาศต่ำกว่าจุดเยือกแข็งอำนาจแม่เหล็กจะแข็งแกร่งขึ้น ดังนั้นเมทากรอสที่อาศัยอยู่บนภูเขาหิมะจึงกระฉับกระเฉงมาก",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "コメットパンチ",
				'zh-tw': "彗星拳",
				'th-th': "โคเม็ทพันช์",
			},
			damage: 60,
			cost: ["Metal"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「コメットパンチ」のダメージは「+60」される。",
				'zh-tw': "在下個自己的回合，這隻寶可夢「彗星拳」的傷害「+60」點。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา แดเมจจาก [โคเม็ทพันช์] ของโปเกมอนนี้จะถูก [＋60]",
			},
		},
		{
			name: {
				'ja-jp': "ラスターブラスト",
				'zh-tw': "潔淨爆破",
				'th-th': "ลัสเตอร์บลาสต์",
			},
			damage: 200,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
				'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752932,
				tcgplayer: 566199,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "メタング",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [376],
};

export default card;
