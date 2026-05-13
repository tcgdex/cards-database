import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "フトゥー博士のシナリオ",
		'zh-tw': "弗圖博士的劇本",
		th: "แผนการของศาสตราจารย์ฟูทูร์",
		ko: "리파"
	},

	illustrator: "hncl",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の場のポケモンを1匹選び、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）",
		'zh-tw': "選擇1隻自己的場上寶可夢，放回手牌。（寶可夢以外的卡全部丟棄。）",
		th: "เลือกโปเกมอนบนกระดานฝ่ายเรา 1 ตัว นำกลับขึ้นมือ (ทิ้งการ์ดทุกใบที่ไม่ใช่โปเกมอนที่ตำแหน่งทิ้งการ์ด)",
		ko: "자신의 트래쉬에서 (초) 포켓몬과 「기본 (초) 에너지」를 합계 4장까지 선택해서 상대에게 보여주고 패로 가져온다."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card