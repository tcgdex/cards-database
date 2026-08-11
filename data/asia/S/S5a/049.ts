import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花岩怪",
		th: "มิคารูเกะ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "因為５００年前作惡多端，導致身體被綁縛在楔石的裂縫裡。",
		th: "เพราะทำความชั่วไว้เมื่อ 500 ปีก่อน จึงถูกจับตัวอัดใส่รอยร้าวในหินค้ำหลัก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亡者呐喊",
			th: "เสียงตะโกนของผู้สิ้นลม"
		},

		effect: {
			'zh-tw': "將與對手棄牌區的寶可夢卡張數相同數量的傷害指示物，以任意方式放置在對手的寶可夢身上。然後，將對手棄牌區的寶可夢卡全部放回對手的牌庫並重洗。",
			th: "วางตัวนับแดเมจตามจำนวนการ์ดโปเกมอนที่อยู่ในตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม บนโปเกมอนฝ่ายตรงข้ามตามชอบ หลังจากนั้น นำโปเกมอนบนตำแหน่งทิ้งการ์ดฝ่ายตรงข้ามทั้งหมดใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鬼火",
			th: "ลูกไฟวิญญาณ"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card