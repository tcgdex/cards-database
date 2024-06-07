import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小菘",
		th: "ซุซุนะ",
		ja: "スズナ"
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇任意數量的【水】寶可夢卡與【水】能量卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		th: "ดูการ์ด 7 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอน[น้ำ]และการ์ดพลังงาน[น้ำ]จากในนั้นตามจำนวนที่ชอบ ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
		ja: "自分の山札を上から7枚見て、その中からポケモンとエネルギーを好きなだけ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card