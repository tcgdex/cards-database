import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "オルティガ",
		'zh-tw': "奧爾迪加",
		th: "ออร์ติกา"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中から好きなカードを1枚選び、相手の山札の下にもどす。その後、相手はのぞむなら、山札を1枚引く。",
		'zh-tw': "查看對手的手牌，從其中任意選擇1張卡，放回對手的牌庫下方。然後，對手若希望，從牌庫抽出1張卡。",
		th: "ดูการ์ดบนมือฝ่ายตรงข้าม เลือกการ์ดที่ชอบ 1 ใบจากในนั้น ใส่กลับไปด้านล่างของสำรับการ์ดฝ่ายตรงข้าม หลังจากนั้น หากฝ่ายตรงข้ามต้องการ จั่วการ์ด 1 ใบจากสำรับการ์ด"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card