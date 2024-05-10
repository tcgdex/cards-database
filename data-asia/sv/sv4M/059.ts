import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "カウンターキャッチャー",
		'zh-tw': "反擊捕捉器",
		th: "เคาน์เตอร์ แคชเชอร์"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。\n\n相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "這張卡只有在自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多時才可使用。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		th: "การ์ดนี้ จะใช้ได้แค่ตอนที่จำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card