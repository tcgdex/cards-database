import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "マツバの確信",
		'zh-tw': "松葉的信心",
		th: "ความมั่นใจของมัตสึบะ",
		ko: "유빈의 확신"
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。\n\n相手のベンチポケモンの数ぶん、自分の山札を引く。",
		'zh-tw': "這張卡必須將自己的1張手牌丟棄才可使用。 從自己的牌庫抽出與對手的備戰寶可夢相同數量的卡。",
		th: "การ์ดนี้ ถ้าไม่ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ดจะใช้ไม่ได้ จั่วการ์ดจากสำรับการ์ดฝ่ายเรา ตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม",
		ko: "이 카드는 자신의 패를 1장 트래쉬하지 않으면 사용할 수 없다. 상대의 벤치 포켓몬의 수만큼 자신의 덱을 뽑는다."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card