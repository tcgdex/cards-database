import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テクノレーダー",
		'zh-tw': "高科技雷達",
		th: "เทคโนเรดาร์"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。\n\n自分の山札から「未来」のポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡必須將自己的1張手牌丟棄才可使用。從自己的牌庫選擇最多2張「未來」寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "การ์ดนี้ ถ้าไม่ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ดจะใช้ไม่ได้ เลือกการ์ดโปเกมอน [อนาคต] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card