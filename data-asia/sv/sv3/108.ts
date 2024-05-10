import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ポケモンリーグ本部",
		'zh-tw': "寶可夢聯盟總部",
		th: "สำนักงานใหญ่โปเกมอนลีก"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいの場のたねポケモンがワザを使うためのエネルギーは、それぞれエネルギー1個ぶん多くなる。",
		'zh-tw': "雙方場上【基礎】寶可夢使用招式所需的能量，各增加1個【無】能量。",
		th: "พลังงานสำหรับใช้ท่าต่อสู้ของโปเกมอน[พื้นฐาน]บนกระดานของทั้งสองฝ่าย แต่ละตัวจะใช้พลังงาน[ไร้สี]เพิ่มขึ้น 1 ลูก"
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card