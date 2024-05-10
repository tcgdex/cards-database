import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "金屬怪",
		th: "เมแทงก์"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'zh-tw': "由２隻鐵啞鈴以磁力結合而成。因為有２個大腦， 精神力量也強化成２倍了。",
		th: "ดันบัล 2 ตัวที่เชื่อมติดกันด้วยอำนาจแม่เหล็ก ด้วยเนื้อเยื่อสมอง 2 ก้อนทำให้พลังจิตนั้นแข็งแกร่งขึ้น 2 เท่า"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "金屬製造者",
			th: "เมทัลเมกเกอร์"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。查看自己的牌庫上方4張卡，從其中選擇任意數量的「基本【鋼】能量」卡，以任意方式附於自己的寶可夢身上。將剩餘卡全部翻回反面並重洗，放回牌庫下方。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 4 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] จากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ สับการ์ดที่เหลือทั้งหมดโดยไม่ดูหน้าการ์ด ใส่กลับไปด้านล่างของสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "光束",
			th: "ลำแสง"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card