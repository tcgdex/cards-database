import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "อกิลดา",
		id: "Accelgor"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		th: "ถอดเปลือกทิ้งแล้วทำให้ตัวเบาลง เอาเยื่อเมือกที่เป็นแถบยาว ๆ พัน รอบกายป้องกันไม่ให้ตัวแห้ง",
		id: "Melepas dan membuang cangkangnya membuat tubuh Accelgor menjadi ringan. Pokémon ini melapisi tubuhnya dengan membran berbentuk sabuk untuk melindungi dirinya dari dehidrasi."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ลอกคราบพิษ",
			id: "Racun Bekas Cangkang"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[สับสน] สลับ โปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun dan Pusing. Tukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card