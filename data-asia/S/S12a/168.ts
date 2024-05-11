import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "祝慶村",
		th: "หมู่บ้านโคโตบุกิ"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可將自己的手牌全部放回牌庫並重洗。這個情況下，從自己的牌庫抽出5張卡。若使用了這個效果，則自己的回合結束。",
		th: "ผู้เล่นทั้งสองฝ่าย ในแต่ละเทิร์นของตัวเองทำได้ 1 ครั้ง นำการ์ดบนมือฝ่ายตัวเองทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับก็ได้ เมื่อทำเช่นนั้นแล้ว จั่วการ์ด 5 ใบจากสำรับการ์ดฝ่ายตัวเอง เมื่อใช้เอฟเฟกต์นี้แล้ว จะจบเทิร์นฝ่ายตัวเอง"
	},

	trainerType: "Stadium",
	regulationMark: "F"
}

export default card