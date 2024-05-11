import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光電傘蜥",
		th: "เอเลซาร์ด",
		ja: "エレザード"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "在如今已滅亡的沙漠之國曾經是人們珍視的對象。 和財寶一起來到了伽勒爾地區。",
		th: "ได้รับการประคบประหงมในประเทศทะเลทรายที่ล่มสลายไปแล้วครั้งหนึ่งในอดีต มายังภูมิภาคกาลาร์พร้อมกับทรัพย์สมบัติ",
		ja: "かつて 滅びた 砂漠の 国で 大事に されていた。 財宝と ともに ガラル地方へ やってきた。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦",
			th: "ประกายไฟ",
			ja: "バチバチ"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "瘋狂伏特",
			th: "ไวลด์โวลต์",
			ja: "ワイルドボルト"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 50 ด้วย",
			ja: "このポケモンにも50ダメージ。"
		},

		damage: 150,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [695]
}

export default card