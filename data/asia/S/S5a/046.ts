import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 呆呆王V",
		th: "กาลาร์ ยาโดคิงV"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "調合",
			th: "ผสม"
		},

		effect: {
			'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。",
			th: "ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด หลังจากนั้น จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "破滅一言",
			th: "คำพูดแห่งการทำลายล้าง"
		},

		effect: {
			'zh-tw': "在下個對手的回合結束時，受到這個招式的寶可夢會【氣絕】。",
			th: "เมื่อจบเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะ [หมดสภาพ]"
		},

		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card