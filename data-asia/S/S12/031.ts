import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光電傘蜥",
		th: "เอเลซาร์ด"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "在如今已滅亡的沙漠之國曾經是人們珍視的對象。 和財寶一起來到了伽勒爾地區。",
		th: "ได้รับการประคบประหงมในประเทศทะเลทรายที่ล่มสลายไปแล้วครั้งหนึ่งในอดีต มายังภูมิภาคกาลาร์พร้อมกับทรัพย์สมบัติ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦",
			th: "ประกายไฟ"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "瘋狂伏特",
			th: "ไวลด์โวลต์"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 50 ด้วย"
		},

		damage: 150,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card