import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "快龍",
		th: "ไคริว",
		ja: "カイリュー"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'zh-tw': "心地善良的寶可夢。只要發現溺水的人或寶可夢， 就會忍不住去救助對方。",
		th: "เป็นโปเกมอนจิตใจดีที่ทนอยู่เฉยไม่ได้ จะต้องเข้าไปช่วยทันทีเวลาเห็นคนหรือโปเกมอนกำลังจะจมน้ำ",
		ja: "溺れている 人や ポケモンを 見つけると 助けずには いられない 心優しい ポケモン。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "龍爪",
			th: "ดรากอนคลอว์",
			ja: "ドラゴンクロー"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "能量颶風",
			th: "เอนเนอร์จี้เฮอริเคน",
			ja: "エナジーハリケーン"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			ja: "自分の山札から基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。"
		},

		damage: 180,
		cost: ["Water", "Lightning", "Colorless", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [149],

	thirdParty: {
		cardmarket: 680211
	}
}

export default card