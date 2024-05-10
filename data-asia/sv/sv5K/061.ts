import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "おとりよせボックス",
		'zh-tw': "訂購盒",
		th: "กล่องสั่งซื้อของ"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードを使ったら、自分の番は終わる。\n\n自分の山札からグッズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "若使用了這張卡，則自己的回合結束。 從自己的牌庫選擇最多2張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "เมื่อใช้การ์ดนี้แล้ว จะจบเทิร์นฝ่ายเรา เลือกการ์ดไอเท็มได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card