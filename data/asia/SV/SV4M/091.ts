import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フトゥー博士のシナリオ",
		'th-th': "แผนการของศาสตราจารย์ฟูทูร์",
		'ko-kr': "투로박사의 시나리오"
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のポケモンを1匹選び、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）",
		'th-th': "เลือกโปเกมอนบนกระดานฝ่ายเรา 1 ตัว นำกลับขึ้นมือ (ทิ้งการ์ดทุกใบที่ไม่ใช่โปเกมอนที่ตำแหน่งทิ้งการ์ด)",
		'ko-kr': "자신의 필드의 포켓몬을 1마리 선택해서 패로 되돌린다. (포켓몬 이외의 카드는 모두 트래쉬한다.)"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741919,
				tcgplayer: 566051,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card
