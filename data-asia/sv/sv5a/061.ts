import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "管理人",
		'zh-tw': "管理員",
		th: "ผู้ดูแล"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、場に「公民館」が出ているなら、この「管理人」はトラッシュせず、山札にもどして切る。",
		'zh-tw': "從自己的牌庫抽出2張卡。然後，若場上有「居民會館」，則不丟棄這張「管理員」，而是放回牌庫並重洗。",
		th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา หลังจากนั้น ถ้ามี [ศาลาประชาคม] อยู่บนกระดาน นำ [ผู้ดูแล] นี้ใส่กลับไปในสำรับการ์ดแล้วสับ โดยไม่ต้องทิ้งที่ตำแหน่งทิ้งการ์ด"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card