import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪童子",
		th: "ยูกิวาราชิ",
		ja: "ユキワラシ"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "據說半夜出現的雪童子會帶來大雪。 靠吃雪和冰維生。",
		th: "ว่ากันว่ายูกิวาราชิที่ปรากฏตัวในตอนกลางดึกจะทำให้หิมะตกหนัก มีชีวิตอยู่ได้ด้วยการกินหิมะหรือน้ำแข็งเป็นอาหาร",
		ja: "真夜中 現れる ユキワラシは 大雪を 降らせると いわれる。 雪や 氷を 食べて 暮らす。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚",
			th: "รวบรวม",
			ja: "もってくる"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			ja: "自分の山札を1枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雪花冰",
			th: "สโนว์ไอซ์",
			ja: "スノーアイス"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [361]
}

export default card