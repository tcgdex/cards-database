import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "リップ",
		'zh-tw': "莉普",
		th: "ลิป",
		ko: "투로박사의 시나리오"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンと「基本エネルギー」を合計4枚まで選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的棄牌區選擇【超】寶可夢卡與「基本【超】能量」卡合計最多4張，在給對手看過後加入手牌。",
		th: "เลือกการ์ดโปเกมอน[พลังจิต]และการ์ด [พลังงานพื้นฐาน[พลังจิต]] รวมกันได้สูงสุด 4 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
		ko: "자신의 필드의 포켓몬을 1마리 선택해서 패로 되돌린다. (포켓몬 이외의 카드는 모두 트래쉬한다.)"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card