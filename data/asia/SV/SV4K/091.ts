import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オーリム博士の気迫",
		'th-th': "จิตมุ่งมั่นของศาสตราจารย์โอลิม",
		'ko-kr': "올림박사의 기백"
	},

	illustrator: "Ryota Murayama",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の「古代」のポケモンを2匹まで選び、トラッシュから基本エネルギーを1枚ずつつける。その後、自分の山札を3枚引く。",
		'th-th': "เลือกโปเกมอน [โบราณ] ฝ่ายเราได้สูงสุด 2 ตัว นำการ์ดพลังงานพื้นฐานจากตำแหน่งทิ้งการ์ดมาติดตัวละ 1 ใบ หลังจากนั้น จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
		'ko-kr': "자신의 「고대」의 포켓몬을 2마리까지 선택해서 트래쉬에서 기본 에너지를 1장씩 붙인다. 그 뒤, 자신의 덱을 3장 뽑는다."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741513,
				tcgplayer: 565846,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card
