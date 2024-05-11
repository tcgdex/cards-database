import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "音波龍",
		th: "ออนเวิร์น"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	description: {
		'zh-tw': "會對在黑暗中無計可施的對手痛加打擊。 好勇鬥狠，性情殘忍。",
		th: "มีนิสัยก้าวร้าวและโหดเหี้ยม ทำให้ศัตรูที่ไม่สามารถทำอะไรได้ในที่มืดเจ็บปวดทรมาน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "光點狩獵",
			th: "เรเดียนต์ฮันท์"
		},

		effect: {
			'zh-tw': "選擇1隻對手的場上的「光輝寶可夢」，將其【氣絕】。",
			th: "เลือก [เรเดียนต์โปเกมอน] 1 ตัวบนกระดานฝ่ายตรงข้ามแล้วทำให้[หมดสภาพ]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "七弦迴響",
			th: "เซเวนส์เอคโค"
		},

		effect: {
			'zh-tw': "從牌庫抽卡直到自己的手牌滿7張為止。",
			th: "จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 7 ใบ"
		},

		damage: 70,
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card