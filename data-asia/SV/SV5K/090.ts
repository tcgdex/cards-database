import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "探検家の先導",
		'zh-tw': "探險家的嚮導",
		th: "การนำทางของนักสำรวจ",
		ko: "탐험가의 선도"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から6枚見て、その中からカードを2枚選び、手札に加える。残りのカードはトラッシュする。",
		'zh-tw': "查看自己的牌庫上方6張卡，從其中選擇2張卡加入手牌。將剩餘卡丟棄。",
		th: "ดูการ์ด 6 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด 2 ใบจากในนั้น นำขึ้นมือ ทิ้งการ์ดที่เหลือที่ตำแหน่งทิ้งการ์ด",
		ko: "자신의 덱을 위에서부터 6장 보고 그 중에서 카드를 2장 선택해서 패로 가져온다. 남은 카드는 트래쉬한다."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card
