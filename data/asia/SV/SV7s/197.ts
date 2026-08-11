import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บัลซ์เซลex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "เวลาท้องอิ่ม"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ฟื้นฟู HP ทั้งหมดของโปเกมอนวิวัฒนาการฝ่ายเราทุกตัว หลังจากนั้น ทิ้งพลังงานที่ติดอยู่กับโปเกมอนที่ฟื้นฟู ทั้งหมดที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	attacks: [{
		name: {
			th: "วันเดอร์ไชน์"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card