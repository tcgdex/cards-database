import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "南瓜怪人",
		th: "พัมพ์จิน"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "南瓜怪人會在朔月的夜裡去別人家門口敲門。開了門的人 會被牠帶往另一個世界。",
		th: "พัมพ์จินจะมาเคาะประตูบ้านในคืนพระจันทร์ข้างขึ้น ใครที่เปิดประตูจะถูกพาไปยังโลกหลังความตาย"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "百鬼夜行",
			th: "ขบวนร้อยอสูร"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方6張卡翻到正面。造成其中的【超】寶可夢的數量×60點傷害。將翻到正面的【超】寶可夢放回牌庫並重洗。將剩餘卡丟棄。",
			th: "หงายการ์ด 6 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา แดเมจจะเท่ากับจำนวนการ์ดโปเกมอน [พลังจิต] ที่อยู่ในนั้น x60 นำการ์ดโปเกมอน [พลังจิต] ที่หงายไว้ใส่กลับไปในสำรับการ์ดแล้วสับ ทิ้งการ์ดที่เหลือที่ตำแหน่งทิ้งการ์ด"
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card