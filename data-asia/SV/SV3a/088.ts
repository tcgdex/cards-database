import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "チリ",
		'zh-tw': "辛俐",
		th: "ชิลลี"
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から4枚見て、その中からカードを2枚選び、手札に加える。残りのカードはすべてウラにして切り、山札の下にもどす。",
		'zh-tw': "查看自己的牌庫上方4張卡，從其中選擇2張卡加入手牌。將剩餘卡全部翻回反面並重洗，放回牌庫下方。",
		th: "ดูการ์ด 4 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด 2 ใบจากในนั้น นำขึ้นมือ สับการ์ดที่เหลือทั้งหมดโดยไม่ดูหน้าการ์ด ใส่กลับไปด้านล่างของสำรับการ์ด"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card