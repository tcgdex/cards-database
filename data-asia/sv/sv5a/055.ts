import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハイパーアロマ",
		'zh-tw': "高級香氛",
		th: "ไฮเปอร์อโรมา"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の山札から1進化ポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多3張【1階進化】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "เลือกการ์ดโปเกมอน[ร่าง1] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card