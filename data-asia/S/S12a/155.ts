import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "剛石",
		th: "เซกิ",
		ja: "セキ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須從自己的手牌將2張【鋼】能量卡丟棄才可使用。 從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
		th: "การ์ดนี้ ถ้าไม่ทิ้งการ์ดพลังงาน[โลหะ] 2 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด จะใช้ไม่ได้ เลือกการ์ดที่ชอบได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
		ja: "このカードは、自分の手札からエネルギーを2枚トラッシュしなければ使えない。\n\n自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card