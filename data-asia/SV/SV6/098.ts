import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ハッサク",
		'zh-tw': "八朔",
		th: "ฮัซซาคุ"
	},

	category: "Trainer",
	rarity: "Uncommon",

	description: {

	},

	illustrator: "GOSSAN",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。\n\n自分の山札を上から8枚見て、その中からカードを3枚まで選び、手札に加える。残りのカードは山札にもどして切る。",
		'zh-tw': "這張卡必須在上個對手的回合自己的寶可夢【昏厥】了才可使用。 查看自己的牌庫上方8張卡，從其中選擇最多3張卡加入手牌。將剩餘卡放回牌庫並重洗。",
		th: "การ์ดนี้ ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเราไม่[หมดสภาพ]จะใช้ไม่ได้ ดูการ์ด 8 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดได้สูงสุด 3 ใบจากในนั้น นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card