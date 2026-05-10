import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ビワ",
		'zh-tw': "枇琶",
		th: "บิวะ",
		ko: "비파"
	},

	illustrator: "DOM",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中からグッズを2枚まで選び、トラッシュする。",
		'zh-tw': "查看對手的手牌，從其中選擇最多2張物品卡，將其丟棄。",
		th: "ดูการ์ดบนมือฝ่ายตรงข้าม เลือกการ์ดไอเท็มได้สูงสุด 2 ใบจากในนั้น ทิ้งที่ตำแหน่งทิ้งการ์ด",
		ko: "상대의 패를 보고 그 중에서 아이템을 2장까지 선택해서 트래쉬한다."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card