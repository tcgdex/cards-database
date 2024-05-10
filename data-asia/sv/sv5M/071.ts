import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "薄霧能量",
		th: "มิสต์เอนเนอร์จี้"
	},

	illustrator: "5ban Graphics",
	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 附有這張卡的寶可夢不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果不會消除。）",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก โปเกมอนที่ติดการ์ดนี้อยู่ จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้ (เอฟเฟกต์ที่ได้รับไปแล้ว จะไม่หายไป)"
	},

	energyType: "Special",
	regulationMark: "H"
}

export default card