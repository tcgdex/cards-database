import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "比克提尼",
		th: "วิคทินี"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "帶來勝利的寶可夢。據說帶著比克提尼的訓練家， 不論任何比賽必能取得勝利。",
		th: "โปเกมอนที่นำพามาซึ่งชัยชนะ ว่ากันว่าเทรนเนอร์ที่พาวิคทินีมาด้วยจะชนะการประลองทุกอย่าง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "啪噠啪噠",
			th: "พั่บพั่บ"
		},

		effect: {
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出6張卡。",
			th: "นำการ์ดบนมือฝ่ายเราทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น จั่วการ์ด 6 ใบจากสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "燒落",
			th: "เผาทิ้ง"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。",
			th: "เลือกพลังงานพิเศษที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card