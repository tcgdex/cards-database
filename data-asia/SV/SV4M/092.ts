import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "リップ",
		th: "ลิป",
		ko: "리파"
	},

	illustrator: "AKIRA EGAWA",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンと「基本エネルギー」を合計4枚まで選び、相手に見せて、手札に加える。",
		th: "เลือกการ์ดโปเกมอน[พลังจิต]และการ์ด [พลังงานพื้นฐาน[พลังจิต]] รวมกันได้สูงสุด 4 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
		ko: "자신의 트래쉬에서 (초) 포켓몬과 「기본 (초) 에너지」를 합계 4장까지 선택해서 상대에게 보여주고 패로 가져온다."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card
